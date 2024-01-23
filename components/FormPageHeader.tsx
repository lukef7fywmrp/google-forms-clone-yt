import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "@/public/logo.png";
import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces";
import IconButton from "./IconButton";
import { Folder, MoreVertical, Star } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import SendForm from "./SendForm";
import { Suspense } from "react";
import { FormPageHeaderBottomSkeleton } from "./Skeletons";
import FormPageHeaderBottom from "./FormPageHeaderBottom";

function FormPageHeader({ form }: { form: IFormsEntity }) {
  return (
    <header className="flex flex-col items-start sm:items-center gap-y-4 fixed w-full pt-4 px-4 bg-white shadow z-50">
      <div className="flex items-start w-full sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-4">
          <Button asChild variant={"ghost"} size={"icon"}>
            <Link href={"/dashboard"}>
              <Image src={logo} alt="Logo" className="w-10 h-10" />
            </Link>
          </Button>

          <p className="pl-1 sm:pl-4 pr-3">{form.localizeInfos.title}</p>

          <IconButton Icon={Folder} className="hidden sm:inline-flex" />
          <IconButton Icon={Star} className="hidden sm:inline-flex" />
        </div>
        <div className="flex items-center sm:gap-x-4">
          <SendForm />
          <IconButton Icon={MoreVertical} className="mr-2 sm:mr-0" />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <Suspense fallback={<FormPageHeaderBottomSkeleton />}>
        <FormPageHeaderBottom form={form} />
      </Suspense>
    </header>
  );
}

export default FormPageHeader;
