"use client";

import { ListWithCards } from "@/types/root";
import ListForm from "./list-form";
import { useEffect, useState } from "react";
import ListItem from "./list-item";

interface ListContainerProps {
  lists: ListWithCards[];
  boardId: string;
}

export default function ListContainer({ lists, boardId }: ListContainerProps) {
  const [orderedData, setOrderedData] = useState(lists);
  useEffect(() => {
    setOrderedData(lists);
  }, [lists]);
  return (
    <ol className="flex gap-x-3 h-full">
      {orderedData.map((item, idx) => (
        <ListItem key={item.id} index={idx} item={item} />
      ))}
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
}
