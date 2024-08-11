import ListHeader from "./list-header";
import { ListWithCards } from "@/types/root";

interface ListItemProps {
  index: number;
  item: ListWithCards;
}

export default function ListItem({ index, item }: ListItemProps) {
  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2">
        <ListHeader data={item} />
      </div>
    </li>
  );
}
