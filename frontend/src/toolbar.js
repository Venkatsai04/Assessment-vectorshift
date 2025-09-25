// toolbar.js

import { DraggableNode } from "./draggableNode";
import { MdInput } from "react-icons/md";
import { TbBoxModel2 } from "react-icons/tb";
import { MdOutlineOutput } from "react-icons/md";
import { CiText } from "react-icons/ci";
import { GoNumber } from "react-icons/go";
import { IoIosCheckboxOutline } from "react-icons/io";
import { VscSymbolString } from "react-icons/vsc";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbMultiplier2X } from "react-icons/tb";

export const PipelineToolbar = () => {
  return (
    <div style={{ backgroundColor: "rgb(20,20,20)" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
          padding: "20px",
        }}
      >
        <DraggableNode type="customInput" label="Input" icon={<MdInput />} />
        <DraggableNode type="llm" label="LLM" icon={<TbBoxModel2 />} />
        <DraggableNode type="customOutput" label="Output" icon={<MdOutlineOutput />} />
        <DraggableNode type="text" label="Text" icon={<CiText />} />
        <DraggableNode type="numberInput" label="Input" icon={<GoNumber />} />
        <DraggableNode type="checkboxNode" label="Checkbox" icon={<IoIosCheckboxOutline />} />
        <DraggableNode type="stringConcatenate" label="Concatenate" icon={<VscSymbolString />} />
        <DraggableNode type="colorPicker" label="Color" icon={<IoColorPaletteOutline />} />
        <DraggableNode type="multiplierNode" label="Multiplier" icon={<TbMultiplier2X />} />
      </div>
    </div>
  );
};

