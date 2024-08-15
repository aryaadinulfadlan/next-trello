"use client";

import { ListWithCards } from "@/types/root";
import ListForm from "./list-form";
import { useEffect, useState } from "react";
import ListItem from "./list-item";
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";
import { useAction } from "@/hooks/use-action";
import { updateListOrder } from "@/actions/update-list-order";
import { toast } from "sonner";
import { updateCardOrder } from "@/actions/update-card-order";

interface ListContainerProps {
  lists: ListWithCards[];
  boardId: string;
}
function reorder<T>(
  list: T[],
  sourceIndex: number,
  destinationIndex: number
): T[] {
  const result = Array.from(list);
  const [removed] = result.splice(sourceIndex, 1);
  result.splice(destinationIndex, 0, removed);
  return result;
}
export default function ListContainer({ lists, boardId }: ListContainerProps) {
  const [orderedData, setOrderedData] = useState(lists);
  const { execute: executeUpdateListOrder } = useAction(updateListOrder, {
    onSuccess() {
      toast.success("List reordered");
    },
    onError(error) {
      toast.error(error);
    },
  });
  const { execute: executeUpdateCardOrder } = useAction(updateCardOrder, {
    onSuccess() {
      toast.success("Card reordered");
    },
    onError(error) {
      toast.error(error);
    },
  });
  const onDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;
    // console.log({ destination, source, type });
    if (!destination) {
      return;
    }

    // if dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // User moves a list
    if (type === "list") {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item, index) => ({ ...item, order: index + 1 })
      );
      setOrderedData(items);
      executeUpdateListOrder({ items, boardId });
    }

    // User moves a card
    if (type === "card") {
      let newOrderedData = [...orderedData];
      const sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId
      );
      const destList = newOrderedData.find(
        (list) => list.id === destination.droppableId
      );
      if (!sourceList || !destList) {
        return;
      }

      // cek jika sourceList.cards merupakan falsy value.
      // jika falsy maka kasih empty array
      if (!sourceList.cards) {
        sourceList.cards = [];
      }
      // cek jika destList.cards merupakan falsy value.
      // jika falsy maka kasih empty array
      if (!destList.cards) {
        destList.cards = [];
      }

      if (source.droppableId === destination.droppableId) {
        // moving the card in the same list
        const reorderedCards = reorder(
          sourceList.cards,
          source.index,
          destination.index
        ).map((card, idx) => ({ ...card, order: idx + 1 }));
        sourceList.cards = reorderedCards;
        setOrderedData(newOrderedData);
        executeUpdateCardOrder({ boardId, items: reorderedCards });
      } else {
        // moving card to the another list
        // 1. remove card from the source list
        const [movedCard] = sourceList.cards.splice(source.index, 1);
        // 2. assign the new listId to the moved card
        movedCard.listId = destination.droppableId;
        // 3. add moved card to the destination list
        destList.cards.splice(destination.index, 0, movedCard);
        // 4. assign new order value to the source list
        const newSourceList = sourceList.cards.map((card, idx) => ({
          ...card,
          order: idx + 1,
        }));
        // 5. assign new order value to the destination list
        const newDestList = destList.cards.map((card, idx) => ({
          ...card,
          order: idx + 1,
        }));
        // 6. update the real sourceList & destList
        sourceList.cards = newSourceList;
        destList.cards = newDestList;

        setOrderedData(newOrderedData);

        // 7. send source array & destination array to make sure they all will be updated
        executeUpdateCardOrder({
          boardId,
          items: [...newSourceList, ...newDestList],
        });
      }
    }
  };
  useEffect(() => {
    setOrderedData(lists);
  }, [lists]);

  // console.log({ orderedData });
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-x-3 h-full"
          >
            {orderedData.map((listItem, idx) => (
              <ListItem key={listItem.id} index={idx} listItem={listItem} />
            ))}
            {provided.placeholder}
            <ListForm />
            <div className="flex-shrink-0 w-1" />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
}
