import { ListWithCards } from "@/types/root";
import ListForm from "./list-form";

interface ListContainerProps {
  lists: ListWithCards[];
  boardId: string;
}

export default function ListContainer({ lists, boardId }: ListContainerProps) {
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
}
