import React from 'react';
import { LPLabel } from "./LPLabel";
import { LPInputGroup } from "./LPInputGroup";

function LPInput({ name, label, type }) {
  return (
    <LPInputGroup>
      <LPLabel htmlFor={name}>{label}</LPLabel>
      <input
        type={type}
        className="flex 
					h-9 
					mt-3
					w-full 
					rounded-md 
					border 
					border-input 
					bg-transparent 
					px-3 py-1 
					text-sm 
					text-black
					shadow-sm 
					transition-colors 
					file:border-0 
					file:bg-transparent 
					file:text-sm 
					file:font-medium 
					placeholder:text-muted-foreground 
					focus-visible:outline-none 
					focus-visible:ring-1 
					focus-visible:ring-ring 
					disabled:cursor-not-allowed 
					disabled:opacity-50"
      />
    </LPInputGroup>
  );
}

export { LPInput }