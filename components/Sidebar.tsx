import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconButton from "./IconButton";
import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import { Suspense } from "react";
import { MenuItemsSkeleton } from "./Skeletons";

function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IconButton Icon={Menu} />
      </SheetTrigger>

      <SheetContent
        side={"left"}
        className="sm:max-w-xs flex flex-col justify-between px-0"
      >
        <SheetHeader>
          <Logo className="px-5 pb-3 text-lg md:text-xl" />
          <Suspense fallback={<MenuItemsSkeleton />}>
            <MenuItems />
          </Suspense>
        </SheetHeader>
        <SheetFooter className="text-xs flex flex-row space-x-2 items-center justify-center sm:justify-center text-muted-foreground">
          <Link href={"#"}>Privacy Policy</Link>
          <span>⋅</span>
          <Link href={"#"}>Terms of Service</Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
