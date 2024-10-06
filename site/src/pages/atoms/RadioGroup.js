import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { CopyBlock, dracula } from 'react-code-blocks';
import { LPRadioGroup, LPRadioItem } from "../../components/launch-pad/atoms/LPRadio";
import { useForm, FormProvider } from 'react-hook-form';

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../../components/globals/layout/Layout"

import { 
	LPCollapsableContainer,
	LPCollapsableContainerHeading,
	LPCollapsableContainerContent,
} from "../../components/launch-pad/organisms/LPCollapsableContainer"

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
				<LayoutHeading text="Radio Group" badge="Atom" />

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true}>
						<LPCollapsableContainerHeading>
							<h2>Example</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<FormProvider {...form}>
								<form>
									<LPRadioGroup name="brand" elementId='favoriteBrand' defaultValue='porsche' label='Favorite Brand'>
										<LPRadioItem id='porsche' value='porsche' label='Porsche' />
										<LPRadioItem id='lamborghini' value='lamborghini' label='Lamborghini' />
										<LPRadioItem id='ferrari' value='ferrari' label='Ferrari' />
									</LPRadioGroup>
								</form>
							</FormProvider>
						</LPCollapsableContainerContent>
					</LPCollapsableContainer>
				</div>

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={false}>
						<LPCollapsableContainerHeading>
							<h2>Usage</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<CopyBlock
								text={code}
								language="react"
								theme={dracula}
								showLineNumbers
								wrapLines />
						</LPCollapsableContainerContent>
					</LPCollapsableContainer>
				</div>

				<div className="px-6">
					<LPCollapsableContainer startShown={false}>
						<LPCollapsableContainerHeading>
							<h2>Source</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<CopyBlock
								text={source}
								language="react"
								theme={dracula}
								showLineNumbers
								wrapLines />
						</LPCollapsableContainerContent>
					</LPCollapsableContainer>
				</div>

			</LayoutMainColumn>
		</LayoutContainer>
	);
};

export default RadioGroup;
