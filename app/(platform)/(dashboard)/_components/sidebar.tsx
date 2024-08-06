"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { useLocalStorage } from "usehooks-ts";
import NavItem, { Organization } from "./nav-item";

interface SidebarProps {
  storageKey?: string;
}
export default function Sidebar({
  storageKey = "t-sidebar-desktop-state",
}: SidebarProps) {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>( //berupa objek
    storageKey,
    {}
  );
  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: { infinite: true },
  });
  const defaultAccordionValue: Array<string> = Object.keys(expanded).reduce(
    (acc: Array<string>, curr: string) => {
      // acc.push(curr);
      if (expanded[curr]) {
        acc = [...acc, curr];
      }
      return acc;
    },
    []
  );
  const onExpand = (id: string) => {
    setExpanded((curr) => ({ ...curr, [id]: !expanded[id] }));
  };
  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }
  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspace</span>
        <Button
          asChild
          type="button"
          size="icon"
          variant="ghost"
          className="ml-auto"
        >
          <Link href="/select-org">
            <FaPlus className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expanded[organization.id]}
            onExpand={onExpand}
            organization={organization as Organization}
          />
        ))}
      </Accordion>
    </>
  );
}
