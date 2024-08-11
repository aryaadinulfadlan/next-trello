import { db } from "@/lib/db";
import { IPageWithParams } from "@/types/root";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ListContainer from "./_components/list-container";

export default async function BoardIdPage({
  params: { boardId },
}: Pick<IPageWithParams<{ boardId: string }, {}>, "params">) {
  const { orgId } = auth();
  if (!orgId) redirect("/select-org");
  const lists = await db.list.findMany({
    where: {
      boardId,
      board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });
  return (
    <div className="p-4 h-full overflow-x-auto">
      <ListContainer boardId={boardId} lists={lists} />
    </div>
  );
}
