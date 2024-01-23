"use client";

import { SearchIcon } from "lucide-react";
import IconButton from "./IconButton";
import { useCommandDialogStore } from "@/store/store";

function SearchMobile() {
  const { open } = useCommandDialogStore();

  return <IconButton Icon={SearchIcon} onClick={open} className="md:hidden" />;
}

export default SearchMobile;
