import { NextResponse } from "next/server";
import { getPendingRequest } from "@/services/request";

export async function GET() {
    const result = await getPendingRequest()
    if (!result)
        return NextResponse.json([])

    const pendingRequest = result.map((req) => {
        return {
            id: req.id,
            name: req.name,
            remarks: req.remarks,
            dateRequested: req.dateRequested,
            office: req.Office.acronym,
            requestTypes: req.RequestDetails.map((detail) => detail.RequestType.type)
        }
    })

    return NextResponse.json(pendingRequest, { status: 200 })
}