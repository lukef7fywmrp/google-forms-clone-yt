import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./ui/button";
import { LucideIcon } from "lucide-react";

type Props = Partial<ButtonProps> & {
  Icon: LucideIcon;
  className?: string;
};

function IconButton({ Icon, className, ...props }: Props) {
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      className={cn("text-neutral-600", className)}
      {...props}
    >
      <Icon className="w-5 h-5" />
    </Button>
  );
}

export default IconButton;
