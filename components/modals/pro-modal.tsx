"use client";

import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import Image from "next/image";
import { Button } from "../ui/button";
import { useAction } from "@/hooks/use-action";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { toast } from "sonner";

export default function ProModal() {
  const { isOpen, onClose } = useProModal();
  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess(data) {
      window.location.href = data;
    },
    onError(error) {
      toast.error(error);
    },
  });
  const onUpgrade = () => execute({});
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle>
        <VisuallyHidden.Root>Dummy Title</VisuallyHidden.Root>
      </DialogTitle>
      <DialogContent
        aria-describedby={undefined}
        className="max-w-md p-0 overflow-hidden"
      >
        <div className="aspect-video relative flex items-center justify-center">
          <Image
            src="/hero.svg"
            priority
            alt="Hero"
            className="object-cover"
            fill
          />
        </div>
        <div className="text-neutral-700 mx-auto space-y-6 p-6">
          <h2 className="font-semibold text-xl">
            Upgrade to Taskify Pro Today!
          </h2>
          <p className="text-xs font-semibold text-neutral-600">
            Explore the best of Taskify
          </p>
          <div className="pl-3">
            <ul className="text-sm list-disc">
              <li>Unlimited Boards</li>
              <li>Advanced Checklists</li>
              <li>Admin and Security Features</li>
              <li>And more!</li>
            </ul>
          </div>
          <Button
            disabled={isLoading}
            onClick={onUpgrade}
            className="w-full"
            variant="primary"
          >
            Upgrade
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
