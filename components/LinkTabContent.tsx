"use client";

import { useParams } from "next/navigation";
import { TabsContent } from "./ui/tabs";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { toast } from "sonner";

function LinkTabContent() {
  const params = useParams();
  const id = params.id;
  const url = `${window.location.origin}/forms/${id}`;

  return (
    <TabsContent value={"link"} className="px-4 py-4 space-y-3">
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="link" className="text-base">
          Link
        </Label>
        <Input type="url" id="link" value={url} readOnly />
      </div>

      <div className="space-x-2 flex items-end justify-end">
        <DialogClose asChild>
          <Button variant={"ghost"} size={"sm"}>
            Cancel
          </Button>
        </DialogClose>

        <Button
          onClick={() => {
            navigator.clipboard.writeText(url);
            toast.success("Copied to clipboard");
          }}
          variant={"outline"}
          size={"sm"}
        >
          Copy
        </Button>
      </div>
    </TabsContent>
  );
}

export default LinkTabContent;
