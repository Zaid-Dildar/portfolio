import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const response = await fetch(
      "https://portfolio-e4a4d-default-rtdb.firebaseio.com/aboutText.json"
    );
    if (!response.ok) {
      return NextResponse.json({ ok: false, error: true });
    }
    const data: Promise<{ data: {} }> = await response.json();
    return NextResponse.json({ text: data });
  } catch (error) {
    return NextResponse.json({ ok: false, error: true });
  }
};
