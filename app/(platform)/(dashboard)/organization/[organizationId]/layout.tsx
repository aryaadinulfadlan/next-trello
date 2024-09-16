import { ILayout } from "@/types/root";
import OrgControl from "./_components/org-control";
import { auth } from "@clerk/nextjs/server";

export async function generateMetadata() {
  const { orgSlug } = auth();
  if (orgSlug && !orgSlug?.includes("-")) {
    const firstChar = orgSlug.charAt(0).toUpperCase();
    return {
      title: firstChar + orgSlug?.slice(1) || "Organization",
    };
  }
  if (orgSlug && orgSlug.includes("-")) {
    const titles = orgSlug.split("-").map((el) => {
      const elFirstChar = el.charAt(0).toUpperCase();
      return `${elFirstChar}${el.slice(1)}`;
    });
    return {
      title: titles.join(" ") || "Organization",
    };
  }
}

export default function OrganizationIdLayout({ children }: ILayout) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
