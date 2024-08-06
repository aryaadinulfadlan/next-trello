"use client";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import Sidebar from "./sidebar";

export default function MobileSidebar() {
  const pathname = usePathname();

  // TO PREVENT HYDRATION ERROR, WHEN WORKING WITH ZUSTAND AND COMPONENTS LIKE MODAL / SHEET
  // BECAUSE THERE IS DIFFERENCE STATE VALUE ON CLIENT SIDE & SERVIER SIDE
  // TO GUARANTEE THIS COMPONENT ONLY RENDER ON CLIENT SIDE
  // const [isMounted, setIsMounted] = useState(false);
  const { isOpen, onClose, onOpen } = useMobileSidebar();

  // EFFECT ONLY EXECUTE ON THE CLIENT SIDE
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // if (!isMounted) {
  //   return null;
  // }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-2"
        variant="ghost"
        size="sm"
      >
        <FaBars className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="left"
          className="p-2 pt-10"
          aria-describedby={undefined}
        >
          <SheetTitle>
            <VisuallyHidden.Root>Dummy Title</VisuallyHidden.Root>
          </SheetTitle>
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </>
  );
}
