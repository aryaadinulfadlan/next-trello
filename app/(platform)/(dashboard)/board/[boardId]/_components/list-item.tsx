"use client";

import { ElementRef, useRef, useState } from "react";
import ListHeader from "./list-header";
import { ListWithCards } from "@/types/root";
import CardForm from "./card-form";
import { cn } from "@/lib/utils";
import CardItem from "./card-item";

interface ListItemProps {
  index: number;
  item: ListWithCards;
}

export default function ListItem({ index, item }: ListItemProps) {
  const textareaRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };
  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2">
        <ListHeader onAddCard={enableEditing} data={item} />
        <ol
          className={cn(
            "mx-1 px-1 py-0.5 flex flex-col gap-y-2",
            item.cards.length > 0 ? "mt-2" : "mt-0"
          )}
        >
          {item.cards.map((card, idx) => (
            <CardItem index={idx} key={card.id} data={card} />
          ))}
        </ol>
        <CardForm
          ref={textareaRef}
          listId={item.id}
          disableEditing={disableEditing}
          enableEditing={enableEditing}
          isEditing={isEditing}
        />
      </div>
    </li>
  );
}
