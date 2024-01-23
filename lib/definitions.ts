import { HTMLInputTypeAttribute } from "react";

export const attributeTypeToInputType: Record<string, HTMLInputTypeAttribute> =
  {
    string: "text",
    text: "text",
    textWithHeader: "text",
    integer: "number",
    real: "number",
    float: "number",
    dateAndTime: "datetime-local",
    date: "date",
    time: "time",
    file: "file",
    image: "file",
    groupOfImages: "file",
    radioButton: "radio",
    list: "radio",
    button: "button",
  };

export type FormDataItem = {
  marker?: string;
  value?: string;
};

export type IndividualResponse = {
  value: string;
  count: number;
  marker: string;
};

export type AttributeCount = {
  [key: string]: number;
};
