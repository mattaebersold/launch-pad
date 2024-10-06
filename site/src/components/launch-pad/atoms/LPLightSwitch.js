import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { Controller } from 'react-hook-form';

const LPLightSwitch = ({ label, control, name, onChange }) => (
  <div className="flex items-center">
    <label className="text-white text-[15px] leading-none pr-[15px] cursor-pointer" htmlFor={label}>
      {label}
    </label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Switch.Root
          className="
            w-[42px] 
            h-[25px] 
            bg-[#303030] 
            rounded-full 
            relative 
            data-[state=checked]:bg-[#303030] 
            outline-none cursor-pointer"
          id={name}
          checked={field.value}
          onCheckedChange={(val) => {
            field.onChange(val);
            if (onChange) onChange(val); 
          }}
        >
          <Switch.Thumb 
            className="
              block 
              w-[21px] 
              h-[21px] 
              bg-white 
              rounded-full 
              transition-transform 
              duration-100 
              translate-x-0.5 
              will-change-transform 
              data-[state=checked]:translate-x-[19px] 
              data-[state=checked]:bg-[#008800]" />
        </Switch.Root>
      )}
    />
  </div>
);

export default LPLightSwitch;