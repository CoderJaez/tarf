import { NextRequest, NextResponse } from "next/server";
import { getPendingRequest } from "@/services/request";

export async function GET() {
    const result = await getPendingRequest()
    if (!result)
        return NextResponse.json([])

    return NextResponse.json(result)
}