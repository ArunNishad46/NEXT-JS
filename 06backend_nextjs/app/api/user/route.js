import { NextResponse } from "next/server";

// export async function GET(request) {
//   const {searchParams} = new URL(request.url);
//   const name = searchParams.get('name');
//   const age = searchParams.get('age');
//   console.log(searchParams)
//   console.log(name, age)
//   return NextResponse.json({name, age});
// }

// export async function GET(request) {
//   const params = new URL(request.url).searchParams;
//   const name = params.get("name")
//   const age = params.get("age")
//   console.log(params)
//   console.log(name, age)
//   return NextResponse.json({name, age});
// }

//Nextjs 15+
export async function GET(request) {
  const params = request.nextUrl.searchParams;
  // const name = params.get("name")
  // const age = params.get("age")
  // console.log(params)
  // console.log(name, age)
  const obj = Object.fromEntries(params.entries())
  return NextResponse.json({obj});
}

