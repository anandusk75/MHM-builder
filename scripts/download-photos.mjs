/**
 * One-time helper: downloads the stock placeholder photos the site used to
 * load from Unsplash and saves them into /public/images, so the site no
 * longer depends on Unsplash at all.
 *
 * Run once from the project root:   node scripts/download-photos.mjs
 * Then commit the new files in public/images and delete this script.
 *
 * Replace any photo later by overwriting the file at the same path.
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";

const photos = [
  ["home/hero.jpg", "1503387762-592deb58ef4e"],
  ["projects/alder-street-retail/gallery-1.jpg", "1489980557514-251d61e3eeb6"],
  ["projects/alder-street-retail/gallery-2.jpg", "1615109398623-88346a601842"],
  ["projects/alder-street-retail/gallery-3.jpg", "1544723795-3fb6469f5b39"],
  ["projects/alder-street-retail/main.jpg", "1580489944761-15a19d654956"],
  ["projects/cedar-ridge-residence/gallery-1.jpg", "1600566753086-00f18fb6b3ea"],
  ["projects/cedar-ridge-residence/gallery-2.jpg", "1600585152220-90363fe7e115"],
  ["projects/cedar-ridge-residence/gallery-3.jpg", "1600210492486-724fe5c67fb0"],
  ["projects/cedar-ridge-residence/gallery-4.jpg", "1600607687920-4e2a09cf159d"],
  ["projects/cedar-ridge-residence/main.jpg", "1600585154340-be6161a56a0c"],
  ["projects/northbank-warehouse-conversion/gallery-1.jpg", "1544005313-94ddf0286df2"],
  ["projects/northbank-warehouse-conversion/gallery-2.jpg", "1552058544-f2b08422138a"],
  ["projects/northbank-warehouse-conversion/gallery-3.jpg", "1560250097-0b93528c311a"],
  ["projects/northbank-warehouse-conversion/gallery-4.jpg", "1600566752355-35792bedcfea"],
  ["projects/northbank-warehouse-conversion/main.jpg", "1541976590-713941681591"],
  ["projects/orchard-lane-residence/gallery-1.jpg", "1493809842364-78817add7ffb"],
  ["projects/orchard-lane-residence/gallery-2.jpg", "1433832597046-4f10e10ac764"],
  ["projects/orchard-lane-residence/gallery-3.jpg", "1465447142348-e9952c393450"],
  ["projects/orchard-lane-residence/gallery-4.jpg", "1481253127861-534498168948"],
  ["projects/orchard-lane-residence/main.jpg", "1416331108676-a22ccb276e35"],
  ["projects/pearl-district-office/gallery-1.jpg", "1512917774080-9991f1c4c750"],
  ["projects/pearl-district-office/gallery-2.jpg", "1523217582562-09d0def993a6"],
  ["projects/pearl-district-office/gallery-3.jpg", "1580587771525-78b9dba3b914"],
  ["projects/pearl-district-office/gallery-4.jpg", "1519345182560-3f2917c472ef"],
  ["projects/pearl-district-office/main.jpg", "1517581177682-a085bb7ffb15"],
  ["projects/riverside-hospitality-pavilion/gallery-1.jpg", "1600047509807-ba8f99d2cdde"],
  ["projects/riverside-hospitality-pavilion/gallery-2.jpg", "1421789665209-c9b2a435e3dc"],
  ["projects/riverside-hospitality-pavilion/gallery-3.jpg", "1541888946425-d81bb19240f5"],
  ["projects/riverside-hospitality-pavilion/main.jpg", "1600607688066-890987f18a86"],
  ["projects/skyline-modern/gallery-1.jpg", "1503174971373-b1f69850bded"],
  ["projects/skyline-modern/gallery-2.jpg", "1541123356219-284ebe98ae3b"],
  ["projects/skyline-modern/gallery-3.jpg", "1503387837-b154d5074bd2"],
  ["projects/skyline-modern/gallery-4.jpg", "1441974231531-c6227db76b6e"],
  ["projects/skyline-modern/main.jpg", "1449844908441-8829872d2607"],
  ["projects/willamette-house/gallery-1.jpg", "1600607687939-ce8a6c25118c"],
  ["projects/willamette-house/gallery-2.jpg", "1497366216548-37526070297c"],
  ["projects/willamette-house/gallery-3.jpg", "1600210491892-03d54c0aaf87"],
  ["projects/willamette-house/gallery-4.jpg", "1531973576160-7125cd663d86"],
  ["projects/willamette-house/main.jpg", "1486406146926-c627a92ad1ab"],
  ["renovations/1.jpg", "1600585154526-990dced4db0d"],
  ["renovations/2.jpg", "1531973576160-7125cd663d86"],
  ["renovations/3.jpg", "1600210491892-03d54c0aaf87"],
  ["renovations/4.jpg", "1497366216548-37526070297c"],
];

let failed = 0;
for (const [path, id] of photos) {
  const dest = join("public", "images", path);
  try {
    await access(dest);
    console.log("skip (exists)", dest);
    continue;
  } catch {}
  const url = `https://images.unsplash.com/photo-${id}?q=80&auto=format&fit=crop&fm=jpg&w=2400`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error("FAILED", res.status, dest);
    failed++;
    continue;
  }
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  console.log("saved", dest);
}
console.log(failed ? `${failed} photo(s) failed` : `Done: ${photos.length} photos`);
process.exitCode = failed ? 1 : 0;
