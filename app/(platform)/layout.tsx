import { Toaster } from "@/components/ui/sonner";
import { ILayout } from "@/types/root";
import { ClerkProvider } from "@clerk/nextjs";

export default function PlatformLayout({ children }: ILayout) {
  return (
    <ClerkProvider>
      {children}
      <Toaster />
    </ClerkProvider>
  );
}
