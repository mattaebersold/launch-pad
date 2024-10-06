import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { CopyBlock, dracula } from 'react-code-blocks';
import LPCheckbox from "../../components/launch-pad/atoms/LPCheckbox";
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

const Input = () => {
	const form = useForm();
	const { register } = form;


	const usage = `
import React from 'react';
import LPCheckbox from "../../components/launch-pad/atoms/LPCheckbox";

export default function CheckboxExample() {
	return (
		<>
		
			<FormProvider {...form}>
				<form>
					<LPCheckbox register={register} name='terms' label='Accept Terms & Conditions' required />
				</form>
			</FormProvider>

		</>
	);
}
	`

	const source = `
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
	`

	return (
		<LayoutContainer>
			<Sidebar />
			<LayoutMainColumn>
				<LayoutHeading badge="Atom" text="Checkbox" />

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true}>
						<LPCollapsableContainerHeading>
							<h2>Example</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<div className="mb-6">
								<FormProvider {...form}>
									<form>
										<LPCheckbox register={register} name='terms' label='Accept Terms & Conditions' required />
									</form>
								</FormProvider>
							</div>
						</LPCollapsableContainerContent>
					</LPCollapsableContainer>
				</div>

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={false}>
						<LPCollapsableContainerHeading>
							<h2>Variants</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<div className="mb-6">
								<p>TBD</p>
							</div>
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
							text={usage}
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

export default Input;
