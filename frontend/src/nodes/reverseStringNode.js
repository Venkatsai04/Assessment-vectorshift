import { BaseNode } from "../components/BaseNode";
import { useState } from "react";

export const ReverseStringNode = (props) => {
  const { id, data } = props;

  const [reversedValue, setReversedValue] = useState("");

  const customFields = [
    {
      label: "Input String",
      name: "inputString",
      type: "text",
      default: data?.inputString || "",
      onChange: (value) => {
        // update reversed value when input changes
        setReversedValue(value.split("").reverse().join(""));
      },
    },
    {
      label: "Reversed",
      name: "reversedString",
      type: "text",
      default: reversedValue,
      readOnly: true, // user can't edit directly
    },
  ];

  const inputHandles = [{ id: `${id}-input` }];
  const outputHandles = [{ id: `${id}-output` }];

  return (
    <BaseNode
      id={id}
      label="Reverse String"
      data={data}
      customFields={customFields}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      style={{
        backgroundColor: "rgb(30,30,30)",
        border: "4px solid",
        borderImageSlice: 1,
        borderImageSource:
          "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)",
      }}
    />
  );
};
