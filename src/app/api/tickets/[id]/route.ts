import { NextRequest, NextResponse } from "next/server";
import { assignTech } from "@/services/request";

export const dynamic = "force-dynamic";
export async function POST(req: NextRequest, context: any) {
    const { params } = context;
    const data = await req.json()
    const success = await assignTech(Number(data.userId), Number(params.id))
    if (!success) return NextResponse.json({ message: "Failed to assigned IT Support" }, { status: 401 })
    return NextResponse.json({ message: "Sucessfully assigned IT Support." }, { status: 200 })
}