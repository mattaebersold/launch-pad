import * as RadioGroup from '@radix-ui/react-radio-group';
import React from 'react';
import { LPLabel } from "./LPLabel";
import { Controller } from 'react-hook-form';

export const LPRadioItem = React.forwardRef(({ id, value, label }) => {
  return (
    <div className="flex items-center">
			<RadioGroup.Item
				className="cursor-pointer bg-white w-[25px] h-[25px] rounded-full hover:bg-white focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
				value={value}
				id={id}
			>
				<RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[15px] after:h-[15px] after:rounded-[50%] after:bg-black" />
			</RadioGroup.Item>
			<label className="cursor-pointer text-white text-[15px] leading-none pl-[15px]" htmlFor={id}>
				{label}
			</label>
		</div>
);
});


export const LPRadioGroup = ({
	control,
	name,
	elementId,
  defaultValue,
	label,
	children,
}) => {
  return (

    <div id={elementId} className="my-5">
			<LPLabel htmlFor={elementId}>{label}</LPLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <RadioGroup.Root
            className="flex flex-col gap-2.5"
            {...field}
            aria-label={label}
            onValueChange={field.onChange}
          >
            {children}
          </RadioGroup.Root>
        )}
      />
    </div>
  )
}

	