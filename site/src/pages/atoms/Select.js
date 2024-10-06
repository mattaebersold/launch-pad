import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { LPSelect, LPSelectItem } from "../../components/launch-pad/atoms/LPSelect"
import { CopyBlock, dracula } from 'react-code-blocks';
import { useForm, FormProvider } from 'react-hook-form';
import { 
	LPCollapsableContainer,
	LPCollapsableContainerHeading,
	LPCollapsableContainerContent,
} from "../../components/launch-pad/organisms/LPCollapsableContainer"

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading,
} from "../../components/globals/layout/Layout"

import {
	ParamContainer,
	Param,
} from "../../components/globals/Params"

const StateSelectPage = () => {
	const form = useForm();

	const install = `
    yarn add @radix-ui/react-icons
    yarn add @radix-ui/react-select
  `

	const usage = `
	
import { LPSelect, LPSelectItem } from '../atoms/LPSelect';
import { useForm, FormProvider } from 'react-hook-form';

const SelectExample = () => {
	const form = useForm();
  
	return (

    <FormProvider {...form}>
			<form>
				<LPSelect
					name='select-example'
					elementId='select-example'
					placeholder='Select Placeholder' 
					label='Favorite Car Brand'>
						<LPSelectItem value="Porsche">Porsche</LPSelectItem>
						<LPSelectItem value="Ferrari">Ferrari</LPSelectItem>
						<LPSelectItem value="Lamborghini">Lamborghini</LPSelectItem>
				</LPSelect>
			</form>
		</FormProvider>
	)
}

export default SelectExample;

	`

	const code = `
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import { LPLabel } from "./LPLabel";
import React from 'react';
import { Controller } from 'react-hook-form';


// Define SelectItem component first
export const LPSelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <Select.Item 
			className='SelectItem
				leading-none
				rounded-md
				flex
				items-center
				h-7
				px-5
        text-black
				relative
				select-none' {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

// Add display name for SelectItem component
LPSelectItem.displayName = 'SelectItem';

export const LPSelect = ({
  control,
  name,
  elementId,
	label,
	placeholder,
	children
}) => {
  return (

    <div id={elementId}>
			<LPLabel htmlFor={name}>{label}</LPLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
        <Select.Root name={name}>
          <Select.Trigger className="
            SelectTrigger 
            border-[1px]
            text-black
            border-black 
            focus:border-purple 
            focus:border-purple 
            inline-flex 
            items-center 
            justify-center 
            rounded-lg 
            px-4 
            gap-1 
            leading-none 
            h-9 
            bg-white
            shadow-md 
            hover:bg-mauve-3 
            focus:shadow-outline 
            focus:outline-none" aria-label={label}>
            <Select.Value placeholder={placeholder} />
            <Select.Icon className="SelectIcon">
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className="SelectContent overflow-hidden bg-white rounded-xl shadow-xl">
              <Select.ScrollUpButton className="SelectScrollButton flex items-center justify-center h-9 bg-white  cursor-default">
                <ChevronUpIcon />
              </Select.ScrollUpButton>
              <Select.Viewport className="SelectViewport p-1">
                <Select.Group>
                  {children}
                </Select.Group>
              </Select.Viewport>
              <Select.ScrollDownButton className="SelectScrollButton">
                <ChevronDownIcon />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
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
				
				<LayoutHeading text="Select Dropdown" badge="Atom" />

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true} outline>
						<LPCollapsableContainerHeading>
							<h2>Example</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
						<FormProvider {...form}>
							<form className="py-6">
								<LPSelect
									name='select-example'
									elementId='select-example'
									placeholder='Select Placeholder' 
									label='Favorite Car Brand'>
										<LPSelectItem value="Porsche">Porsche</LPSelectItem>
										<LPSelectItem value="Ferrari">Ferrari</LPSelectItem>
										<LPSelectItem value="Lamborghini">Lamborghini</LPSelectItem>
								</LPSelect>
							</form>
						</FormProvider>
						</LPCollapsableContainerContent>
					</LPCollapsableContainer>
				</div>

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true} outline>
						<LPCollapsableContainerHeading>
							<h2>Params</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<ParamContainer>
								<Param label="elemeneName" description="Names the root select element" />
								<Param label="elemeneId" description="ID Attribute for root container element" />
								<Param label="placeholder" description="Placeholder text for the select element" />
								<Param label="label" description="Optional label (also sets aria-label)" />
							</ParamContainer>
						</LPCollapsableContainerContent>
					</LPCollapsableContainer>
				</div>
				
				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={false} outline>
						<LPCollapsableContainerHeading>
							<h2>Install</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<CopyBlock
								text={install}
								language="react"
								theme={dracula}
								showLineNumbers
								wrapLines />
						</LPCollapsableContainerContent>
					</LPCollapsableContainer>
				</div>


				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={false} outline>
						<LPCollapsableContainerHeading>
							<h2>Usage</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<CopyBlock
								className="w-[500px]"
								text={usage}
								language="react"
								theme={dracula}
								showLineNumbers
								wrapLines />
						</LPCollapsableContainerContent>
					</LPCollapsableContainer>
				</div>
				

				<div className="px-6">
					<LPCollapsableContainer startShown={false} outline>
						<LPCollapsableContainerHeading>
							<h2>Source</h2>
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
				

      </LayoutMainColumn>
    </LayoutContainer>
  );
};

export default StateSelectPage;