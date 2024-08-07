import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const LPCheckbox = ({ label, name, register }) => (
  <div className="flex items-center cursor-pointer">
    <Checkbox.Root
      className="
        bg-black 
        hover:bg-black 
        flex 
        h-[25px] 
        w-[25px] 
        appearance-none 
        items-center 
        justify-center 
        rounded-[4px]
        border-[1px]
        border-input 
        outline-none"
      id={name}
      {...register(name)}
      onCheckedChange={(checked) => {
        const event = {
          target: {
            name,
            value: checked,
          },
        };
        register(name).onChange(event);
      }}
    >
      <Checkbox.Indicator className="text-white">
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label
      className="
        pl-[15px] 
        text-[15px] 
        leading-none 
        text-white 
        relative 
        block
        cursor-pointer"
      htmlFor={name}
    >
      {label}
    </label>
  </div>
);

export default LPCheckbox;