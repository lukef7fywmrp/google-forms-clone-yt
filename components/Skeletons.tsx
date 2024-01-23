import { Loader } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import IconButton from "./IconButton";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";

export function SearchSkeleton() {
  return (
    <>
      <Skeleton className="hidden md:flex flex-1 items-center justify-between w-full lg:w-auto max-w-xl lg:min-w-[270px] py-6 px-4 gap-x-6 rounded-md cursor-pointer bg-gray-100 transition-colors" />
      <IconButton Icon={Loader} className="md:hidden animate-spin" />
    </>
  );
}

export function MenuItemsSkeleton() {
  return (
    <div className="flex flex-col border-y py-2 space-y-2">
      <Skeleton className="w-[95%] rounded-r-full h-10" />
      <Skeleton className="w-[95%] rounded-r-full h-10" />
      <Skeleton className="w-[95%] rounded-r-full h-10" />
      <Skeleton className="w-[95%] rounded-r-full h-10" />
    </div>
  );
}

export function FormListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Skeleton className="h-32" />
      <Skeleton className="h-32" />
      <Skeleton className="h-32" />
      <Skeleton className="h-32" />
      <Skeleton className="h-32" />
      <Skeleton className="h-32" />
    </div>
  );
}

export function FormPageHeaderBottomSkeleton() {
  return (
    <div className="flex gap-x-4 mb-1">
      <Skeleton className="w-24 h-7" />
      <Skeleton className="w-24 h-7" />
    </div>
  );
}

export function ResponsesHeaderSkeleton() {
  return (
    <Card className="!-mt-1">
      <CardHeader>
        <CardTitle className="font-normal">
          <Skeleton className="w-24 h-7" />
        </CardTitle>
      </CardHeader>

      <CardFooter className="p-0 justify-center mb-1">
        <div className="flex justify-evenly flex-1">
          <Skeleton className="w-24 h-7" />
          <Skeleton className="w-24 h-7" />
          <Skeleton className="w-24 h-7" />
        </div>
      </CardFooter>
    </Card>
  );
}
