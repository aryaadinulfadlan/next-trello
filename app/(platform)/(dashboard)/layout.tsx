import { ILayout } from "@/types/root";
import Navbar from "./_components/navbar";
export default function DashboardLayout({ children }: ILayout) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}
