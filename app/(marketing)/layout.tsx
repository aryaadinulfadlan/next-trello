import { ILayout } from "@/types/root";
import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/footer";

export default function MarketingLayout({ children }: ILayout) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
}
