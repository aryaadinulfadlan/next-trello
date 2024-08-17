"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useCardModal } from "@/hooks/use-card-modal";
import { fetcher } from "@/lib/fetcher";
import { CardWithLists } from "@/types/root";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useQuery } from "@tanstack/react-query";
import CardHeader from "./header";
import CardDescription from "./description";
import CardActions from "./actions";

export default function CardModal() {
  const { isOpen, onClose, onOpen, id } = useCardModal();
  const { data: cardData } = useQuery<CardWithLists>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${id}`),
  });

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetcher(`/api/cards/${id}`);
  //     console.log("getData", response);
  //   };
  //   if (id) {
  //     getData();
  //   }
  // }, [id]);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle>
        <VisuallyHidden.Root>Dummy Title</VisuallyHidden.Root>
      </DialogTitle>
      <DialogContent aria-describedby={undefined}>
        {!cardData ? <CardHeader.Skeleton /> : <CardHeader card={cardData} />}
        <div className="grid md:grid-cols-4 md:gap-4">
          <div className="col-span-3">
            <div className="w-full space-y-6">
              {!cardData ? (
                <CardDescription.Skeleton />
              ) : (
                <CardDescription card={cardData} />
              )}
            </div>
          </div>
          {!cardData ? (
            <CardActions.Skeleton />
          ) : (
            <CardActions card={cardData} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
