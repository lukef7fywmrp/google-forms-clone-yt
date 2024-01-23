"use server";

import api from "@/oneentry";
import { redirect } from "next/navigation";
import { IFormsDataEntity } from "oneentry/dist/formsData/formsDataInterfaces";

type ErrorResponse = {
  statusCode: number;
  message: string;
};

export async function addFormData(prevState: any, formData: FormData) {
  console.log("addFormData", formData);
  const rawFormData = Object.entries(Object.fromEntries(formData))
    .filter(([key, value]) => !key.startsWith("$ACTION"))
    .map(([key, value]) => ({ marker: key, value }));

  const formIdentifier = rawFormData
    .find((data) => data.marker === "identifier")
    ?.value.toString();
  const formDataToSubmit = rawFormData.filter(
    (data) => data.marker !== "identifier"
  );

  if (!formIdentifier) return;

  let error: ErrorResponse | null = null;

  let formDataEntity: IFormsDataEntity | null = null;

  try {
    formDataEntity = await api.FormData.postFormsData({
      formData: {
        // @ts-ignore
        en_US: formDataToSubmit,
      },
      formIdentifier,
    });

    if (!formDataEntity?.id) {
      // @ts-ignore
      error = formDataEntity as ErrorResponse;

      return {
        error: error.message,
      };
    }
  } catch (error) {
    return {
      error: "API Error: Failed to add form data.",
    };
  }

  redirect(`/forms/${formIdentifier}/success`);
}
