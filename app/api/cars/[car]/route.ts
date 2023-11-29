import { NextRequest, NextResponse} from "next/server";
import Car from "../../../../server/models/car";
import dbConnect from "../../../../server/utils/dbconnect";


export async function DELETE(request: NextRequest,{ params }) {
    await dbConnect()
    console.log(params.car)
    await Car.findByIdAndDelete(params.car)
    return NextResponse.json({ message: "data deleted successfully" });
  }
