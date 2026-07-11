import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const { name, email, projectType, message } = body as Record<string, unknown>;
  return (
    typeof name === "string" &&
    name.trim().length > 0 &&
    typeof email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    typeof projectType === "string" &&
    projectType.trim().length > 0 &&
    typeof message === "string" &&
    message.trim().length > 0
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  // No CMS/CRM wired up yet — log the submission so it's visible during development.
  // Replace with an email send or CRM integration when one is available.
  console.log("Contact form submission:", body);

  return NextResponse.json({ ok: true });
}
