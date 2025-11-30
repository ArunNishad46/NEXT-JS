// export async function GET() {
//   return new Response("First Response");
// }

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({message:"First Response"}, {status: 200});
}