import { NextRequest, NextResponse} from "next/server";
import Car from "../../../server/models/car";
import dbConnect from "../../../server/utils/dbconnect";


export async function GET(request: NextRequest) {
  await dbConnect()
    const cars = await Car.find({});
    return NextResponse.json(cars);
  }

  export async function POST(request: Request) {
    const {brand,model,property,image} = await request.json()
    const newCar={brand,model,property,image};
    await dbConnect();
    const cars = await Car.create(newCar)
    return  NextResponse.json({ message: "new data added" }, { status: 201 });
  }
  
  