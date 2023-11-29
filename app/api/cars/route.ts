import { NextRequest, NextResponse} from "next/server";
import clientPromise from "../../../server/utils/dbconnect";


export async function GET(request: NextRequest) {
    const client = await clientPromise;
    const db = client.db("test");
    const cars = await db.collection("cars").find({}).toArray();
    return NextResponse.json(cars);
  }

  export async function POST(request: Request) {
    const res = await request.json()
    console.log(res)
    // const client = await clientPromise;
    // const db = client.db("test");
    // const cars = await db.collection("cars").create({});
    return  NextResponse.json({ message: "Hello World" }, { status: 200 });
  }
  
  