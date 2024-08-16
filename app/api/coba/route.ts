import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await res.json();
    return NextResponse.json({ data: response });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
