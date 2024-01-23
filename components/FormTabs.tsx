"use client";

import { usePathname } from "next/navigation";
import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";

const tabs = [
  {
    title: "Questions",
    href: "",
  },
  {
    title: "Responses",
    href: "responses",
  },
] as const;

function FormTabs({
  form,
  responses,
}: {
  form: IFormsEntity;
  responses: number;
}) {
  const pathname = usePathname();

  return (
    <Tabs defaultValue="questions">
      <TabsList className="w-full bg-transparent gap-x-4 !p-0 h-full">
        {tabs.map((tab) => {
          const formIdPage = `/dashboard/forms/${form.identifier}`;
          const isActive =
            tab.href === ""
              ? pathname === formIdPage
              : pathname.includes(`${formIdPage}/${tab.href}`);

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
                  href={`${formIdPage}/${tab.href}`}
                  className="font-medium text-sm flex items-center px-2"
                >
                  {tab.title}

                  {tab.href === "responses" && responses > 0 && (
                    <span
                      className={cn(
                        "text-accent rounded-full flex items-center justify-center h-4 w-4 shrink-0 ml-2 text-xs",
                        isActive ? "bg-violet-900" : "bg-zinc-700"
                      )}
                    >
                      {responses}
                    </span>
                  )}
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

export default FormTabs;
