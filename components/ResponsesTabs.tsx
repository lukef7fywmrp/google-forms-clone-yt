"use client";

import { useParams, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";

const tabs = [
  {
    title: "Summary",
    href: "",
  },
  {
    title: "Question",
    href: "question",
  },
  {
    title: "Individual",
    href: "individual",
  },
] as const;

function ResponsesTabs() {
  const pathname = usePathname();
  const params = useParams();

  return (
    <Tabs defaultValue="questions" className="w-full">
      <TabsList className="w-full bg-transparent gap-x-4 !p-0 h-full justify-evenly">
        {tabs.map((tab) => {
          const responsesPage = `/dashboard/forms/${params.id}/responses`;
          const isActive =
            tab.href === ""
              ? pathname === responsesPage
              : pathname === `${responsesPage}/${tab.href}`;

          return (
            <TabsTrigger
              key={tab.href}
              value={tab.href}
              className={cn(
                "flex-col !p-0",
                isActive ? "!text-violet-900" : "text-neutral-950"
              )}
              asChild
            >
              <div className="space-y-1.5 w-fit">
                <Link
                  className="font-medium text-sm flex items-center px-2"
                  href={`${responsesPage}/${tab.href}`}
                >
                  {tab.title}
                </Link>
                <hr
                  className={cn(
                    "w-full border-b-2 rounded-t-xl",
                    isActive ? "border-violet-900" : "border-transparent"
                  )}
                />
              </div>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}

export default ResponsesTabs;
