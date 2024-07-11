import { ILayout } from "@/types/root";

export default function ClerkLayout({ children }: ILayout) {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
}
