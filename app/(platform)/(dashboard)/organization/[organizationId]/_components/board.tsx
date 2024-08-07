import deleteBoard from "@/actions/delete-board";
import FormDelete from "./form-delete";

interface Props {
  title: string;
  id: string;
}
export default function Board({ title, id }: Props) {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>{title}</p>
      <FormDelete />
    </form>
  );
}
