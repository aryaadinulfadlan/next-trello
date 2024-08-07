import { db } from "@/lib/db";
import Form from "./_components/form";
import Board from "./_components/board";

export default async function OrganizationIdPage() {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <Board key={board.id} id={board.id} title={board.title} />
        ))}
      </div>
    </div>
  );
}
