import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins, Sora } from "next/font/google";
import Link from "next/link";
import { LuMedal } from "react-icons/lu";

const sora = Sora({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MarketingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          sora.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <LuMedal className="h-6 w-6 mr-2" />
          No 1 Task Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 font-semibold">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          poppins.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </div>
      <Button className="mt-6" size={"lg"} asChild>
        <Link href={"/sign-up"}>Get Taskify for free</Link>
      </Button>
    </div>
  );
}