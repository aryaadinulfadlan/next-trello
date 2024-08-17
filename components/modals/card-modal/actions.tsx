import { copyCard } from "@/actions/copy-card";
import { deleteCard } from "@/actions/delete-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAction } from "@/hooks/use-action";
import { useCardModal } from "@/hooks/use-card-modal";
import { CardWithLists } from "@/types/root";
import { useParams } from "next/navigation";
import { LuCopy, LuTrash } from "react-icons/lu";
import { toast } from "sonner";

interface CardActionsProps {
  card: CardWithLists;
}

export default function CardActions({ card }: CardActionsProps) {
  const { boardId } = useParams<{ boardId: string }>();
  const { onClose } = useCardModal();
  const { execute: executeCopyCard, isLoading: isLoadingCopy } = useAction(
    copyCard,
    {
      onSuccess(data) {
        toast.success(`Card "${data.title}" copied`);
        onClose();
      },
      onError(error) {
        toast.error(error);
        onClose();
      },
    }
  );
  const { execute: executeDeleteCard, isLoading: isLoadingDelete } = useAction(
    deleteCard,
    {
      onSuccess(data) {
        toast.success(`Card "${data.title}" deleted`);
        onClose();
      },
      onError(error) {
        toast.error(error);
        onClose();
      },
    }
  );
  return (
    <div className="space-y-2 mt-2">
      <p className="text-xs font-semibold">Actions</p>
      <Button
        variant="gray"
        className="w-full justify-start"
        size="inline"
        onClick={() => executeCopyCard({ id: card.id, boardId })}
        disabled={isLoadingCopy}
      >
        <LuCopy className="h-4 w-4 mr-2" />
        Copy
      </Button>
      <Button
        variant="gray"
        className="w-full justify-start"
        size="inline"
        onClick={() => executeDeleteCard({ id: card.id, boardId })}
        disabled={isLoadingDelete}
      >
        <LuTrash className="h-4 w-4 mr-2" />
        Delete
      </Button>
    </div>
  );
}

CardActions.Skeleton = function CardActionsSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="w-20 h-4 bg-neutral-400" />
      <Skeleton className="w-full h-8 bg-neutral-400" />
      <Skeleton className="w-full h-8 bg-neutral-400" />
    </div>
  );
};
