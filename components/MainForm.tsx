"use client";

import { IFormsEntity } from "oneentry/dist/forms/formsInterfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { FormInputIcon } from "lucide-react";
import { attributeTypeToInputType } from "@/lib/definitions";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";
import { addFormData } from "@/lib/actions";

function MainForm({
  form,
  publicForm,
}: {
  form: IFormsEntity;
  publicForm?: boolean;
}) {
  const initialState = {
    error: "",
  };

  const [state, formAction] = useFormState(addFormData, initialState);

  return (
    <main
      className={cn(
        "max-w-3xl mx-auto pb-16 space-y-3.5",
        !publicForm ? "pt-40 sm:pt-32" : "pt-8"
      )}
    >
      <Card>
        <hr className="w-full border-t-8 rounded-t-xl border-violet-800" />
        <CardHeader className="p-0 space-y-0">
          <CardTitle className="text-3xl font-medium px-6 py-5">
            {form.localizeInfos.title}
          </CardTitle>
        </CardHeader>
      </Card>

      {form.attributes.length > 0 ? (
        <form className="space-y-3.5" action={formAction}>
          <input type="hidden" name="identifier" value={form.identifier} />
          {form.attributes.map((attr) => (
            <Card key={attr.marker}>
              <CardContent className="grid w-full max-w-xl pt-6 items-center gap-1.5">
                <Label htmlFor={attr.marker} className="text-base font-normal">
                  {attr.localizeInfos.title}
                  {attr.validators?.requiredValidator?.strict && (
                    <span className="text-destructive">*</span>
                  )}
                </Label>
                {attr.listTitles.length > 0 ? (
                  <RadioGroup
                    id={attr.marker}
                    disabled={!publicForm}
                    required={attr.validators?.requiredValidator?.strict}
                    name={attr.marker}
                  >
                    {attr.listTitles.map((listTitle) => (
                      <div
                        key={listTitle.value}
                        className="flex items-center space-x-2"
                      >
                        <RadioGroupItem
                          value={listTitle.value?.toString() || ""}
                          id={listTitle.value?.toString()}
                        />
                        <Label htmlFor={listTitle.value?.toString()}>
                          {listTitle.title}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <Input
                    className="disabled:opacity-100"
                    disabled={!publicForm}
                    name={attr.marker}
                    id={attr.marker}
                    type={attributeTypeToInputType[attr.type]}
                    placeholder={"Your answer"}
                    required={attr.validators?.requiredValidator?.strict}
                    min={attr.validators?.checkForNumberValidator?.minValue}
                    max={attr.validators?.checkForNumberValidator?.maxValue}
                  />
                )}
              </CardContent>
            </Card>
          ))}
          {publicForm ? (
            <div className="space-y-2 w-full flex flex-col">
              <div className="flex items-center justify-between">
                <SubmitButton />
                <Button
                  type="button"
                  variant={"ghost"}
                  className="hover:bg-violet-200/50 text-purple-800 hover:text-purple-800"
                >
                  Clear form
                </Button>
              </div>
              <p className="text-destructive ml-auto">{state?.error}</p>
            </div>
          ) : (
            <div className="mt-6">
              <Link
                className="text-purple-600 hover:text-purple-800"
                href={"https://portfolio.oneentry.cloud"}
              >
                To make any edits to this form, please visit the oneentry cms.
              </Link>
            </div>
          )}
        </form>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Empty Form</CardTitle>
            <CardDescription>
              This form currently has no fields. Please go to the CMS to add
              fields to this form.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-2">
            <FormInputIcon className="w-12 h-12 text-gray-500" />
            <p className="text-center text-gray-500">
              No fields are available in this form.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button asChild variant="outline">
              <Link href={`/dashboard`}>Go Back</Link>
            </Button>
            <Button variant={"brand"} asChild>
              <Link href={`/`}>Go to CMS</Link>
            </Button>
          </CardFooter>
        </Card>
      )}
    </main>
  );
}

export default MainForm;
