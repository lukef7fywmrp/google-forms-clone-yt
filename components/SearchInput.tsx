"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useCommandDialogStore } from "@/store/store";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces";
import { useCallback, useEffect } from "react";

function SearchInput({ forms }: { forms: IFormsEntity[] }) {
  const router = useRouter();
  const { close, isOpen, open } = useCommandDialogStore();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        open();
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  const runCommand = useCallback(
    (command: () => unknown) => {
      close();
      command();
    },
    [close]
  );

  return (
    <>
      <div
        onClick={open}
        className="hidden md:flex flex-1 items-center justify-between w-full lg:w-auto max-w-xl lg:min-w-[270px] py-3 px-4 gap-x-6 rounded-md cursor-pointer bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-x-3">
          <SearchIcon className="w-6 h-6 text-neutral-500" />
          <p className="text-neutral-500 font-light">Search</p>
        </div>
      </div>

      <CommandDialog open={isOpen} onOpenChange={close}>
        <CommandInput placeholder="Search all the forms" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {forms.map((form) => (
              <CommandItem
                key={form.id}
                value={form.identifier}
                onSelect={() =>
                  runCommand(() =>
                    router.push(`/dashboard/forms/${form.identifier}`)
                  )
                }
              >
                {form.localizeInfos.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default SearchInput;
