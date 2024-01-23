import { cn } from "@/lib/utils";
import { FormInputIcon } from "lucide-react";

function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "font-bold text-xl md:text-2xl flex items-center",
        className
      )}
    >
      <FormInputIcon className="w-6 h-6 mr-2" />
      Google Forms
    </div>
  );
}

export default Logo;
