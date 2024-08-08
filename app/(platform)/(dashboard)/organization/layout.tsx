import { ILayout } from "@/types/root";
import Sidebar from "../_components/sidebar";
import ClientOnly from "@/components/ClientOnly";

export default function OrganizationLayout({ children }: ILayout) {
  return (
    <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <ClientOnly>
            <Sidebar />
          </ClientOnly>
        </div>
        {children}
      </div>
    </main>
  );
}
