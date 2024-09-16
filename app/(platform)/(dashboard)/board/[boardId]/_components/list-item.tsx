"use client";

import { ElementRef, useRef, useState } from "react";
import ListHeader from "./list-header";
import { ListWithCards } from "@/types/root";
import CardForm from "./card-form";
import { cn } from "@/lib/utils";
import CardItem from "./card-item";
import { Draggable, Droppable } from "@hello-pangea/dnd";

interface ListItemProps {
  index: number;
  listItem: ListWithCards;
}

export default function ListItem({ index, listItem }: ListItemProps) {
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
    <Draggable draggableId={listItem.id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="shrink-0 h-full w-[272px] select-none"
        >
          <div
            {...provided.dragHandleProps}
            className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2"
          >
            <ListHeader onAddCard={enableEditing} data={listItem} />
            <Droppable droppableId={listItem.id} type="card">
              {(provided) => (
                <ol
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={cn(
                    "mx-1 px-1 py-0.5 flex flex-col gap-y-2",
                    listItem.cards.length > 0 ? "mt-2" : "mt-0"
                  )}
                >
                  {listItem.cards.map((card, idx) => (
                    <CardItem index={idx} key={card.id} card={card} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>
            <CardForm
              ref={textareaRef}
              listId={listItem.id}
              disableEditing={disableEditing}
              enableEditing={enableEditing}
              isEditing={isEditing}
            />
          </div>
        </li>
      )}
    </Draggable>
  );
}
