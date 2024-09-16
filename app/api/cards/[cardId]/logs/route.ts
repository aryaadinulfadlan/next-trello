import { NextRequest, NextResponse } from "next/server";
import { Params } from "../route";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { ENTITY_TYPE } from "@/types/root";

export async function GET(req: NextRequest, { params }: Params) {
  try {
    const { orgId, userId } = auth();
    if (!userId || !orgId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const auditLogs = await db.auditLog.findMany({
      where: {
        orgId,
        entityId: params.cardId,
        entityType: ENTITY_TYPE.CARD,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });
    return NextResponse.json(auditLogs);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
