import ClientOnly from "@/components/client-only";
import CardModal from "@/components/modals/card-modal";
import ProModal from "@/components/modals/pro-modal";
import QueryProvider from "@/components/providers/query-provider";
import { Toaster } from "@/components/ui/sonner";
import { ILayout } from "@/types/root";
import { ClerkProvider } from "@clerk/nextjs";

export default function PlatformLayout({ children }: ILayout) {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ClientOnly>
          <CardModal />
          <ProModal />
        </ClientOnly>
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
}
