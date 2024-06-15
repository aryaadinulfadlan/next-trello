import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/public/logo.svg";
import { Sora } from "next/font/google";
import { cn } from "@/lib/utils";

const sora = Sora({ subsets: ["latin"] });

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src={LogoImg} alt="Logo" height={30} width={30} />
        <p
          className={cn(
            "text-lg font-bold text-neutral-700 pb-1",
            sora.className
          )}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
}
