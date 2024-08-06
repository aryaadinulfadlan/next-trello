import { ILayout } from "@/types/root";
import OrgControl from "./_components/org-control";

export default function OrganizationIdLayout({ children }: ILayout) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
