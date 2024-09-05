import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';
import { LPRadioGroup, LPRadioItem } from "../../components/launch-pad/atoms/LPRadio";
import { useForm, FormProvider } from 'react-hook-form';

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../../components/globals/layout/Layout"

const RadioGroup = () => {
	const form = useForm();

	const code = `
import React from 'react';
import { LPInput } from "../../components/launch-pad/atoms/LPInput";

export default function InputExample() {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<form>
				<LPRadioGroup name="brand" elementId='favoriteBrand' defaultValue='porsche' label='Favorite Brand'>
					<LPRadioItem id='porsche' value='porsche' label='Porsche' />
					<LPRadioItem id='lamborghini' value='lamborghini' label='Lamborghini' />
					<LPRadioItem id='ferrari' value='ferrari' label='Ferrari' />
				</LPRadioGroup>

			</form>
		</FormProvider>
	);
}
		`

	const source = `
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

	
	`
	

	return (
		<LayoutContainer>
			<Sidebar />
			<LayoutMainColumn>
				<Badge color="cyan">Atom</Badge>
				<LayoutHeading text="Radio Group" />

				<div className="my-12">
					<h2 className="mb-3">Example</h2>

					<FormProvider {...form}>
						<form>
							<LPRadioGroup name="brand" elementId='favoriteBrand' defaultValue='porsche' label='Favorite Brand'>
								<LPRadioItem id='porsche' value='porsche' label='Porsche' />
								<LPRadioItem id='lamborghini' value='lamborghini' label='Lamborghini' />
								<LPRadioItem id='ferrari' value='ferrari' label='Ferrari' />
							</LPRadioGroup>
						</form>
					</FormProvider>
				</div>
				
				
				
				<div className="my-12">
					<h2 className="mb-3">Usage</h2>
					<CopyBlock
						text={code}
						language="react"
						theme={dracula}
						showLineNumbers
						wrapLines
					/>
				</div>
				
				<div className="my-12">
					<h2 className="mb-3">Source</h2>
					<CopyBlock
						text={source}
						language="react"
						theme={dracula}
						showLineNumbers
						wrapLines
					/>
				</div>
			</LayoutMainColumn>
		</LayoutContainer>
	);
};

export default RadioGroup;
