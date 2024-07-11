import { ILayout } from "@/types/root";
import { ClerkProvider } from "@clerk/nextjs";

export default function PlatformLayout({ children }: ILayout) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
