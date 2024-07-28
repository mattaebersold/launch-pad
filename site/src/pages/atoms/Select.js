import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { LPSelect, LPSelectItem } from "../../components/launch-pad/atoms/LPSelect"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';

const StateSelectPage = () => {

	const install = `
    yarn add @radix-ui/react-icons
    yarn add @radix-ui/react-select
  `

	const usage = `
	
import { LPSelect, LPSelectItem } from '../atoms/LPSelect';

const SelectExample = () => {
  return (

    <LPSelect
      elemeneName='NAME'
      elementId='ID'
      placeholder='PLACEHOLDER' 
      label='state'>
      
      <LPSelectItem  value="VALUE">VALUE</LPSelectItem>
		</LPSelect>
	)
}

export default SelectExample;

	`

	const code = `
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import React from 'react';


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
  elementId,
  elementName,
	label,
	placeholder,
	children
}) => {
  return (

    <div id={elementId}>
      <Select.Root name={elementName}>
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
    </div>

  )

}

	`

  return (
    <div className="flex items-start w-11/12 max-w-[1400px] mx-auto py-12">
      <Sidebar />
      <div className="grow relative">
				<Badge color="cyan">Atom</Badge>
        <h1 className="text-3xl font-bold mb-6">Select Dropdown</h1>

				<div className="my-12">
					<h2 className="mb-3">Example</h2>
					<LPSelect
						elemeneName='select-example'
						elementId='select-example'
						placeholder='Select Placeholder' 
						label='select-example'>
							<LPSelectItem value="Porsche">Porsche</LPSelectItem>
							<LPSelectItem value="Ferrari">Ferrari</LPSelectItem>
							<LPSelectItem value="Lamborghini">Lamborghini</LPSelectItem>
					</LPSelect>
				</div>

				<div className="my-12">
					<h2 className="mb-3">Params</h2>
					<ul>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">elemeneName</pre> - Names the root select element</li>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">elemeneId</pre> - ID Attribute for root container element</li>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">placeholder</pre> - Placeholder text for the select element</li>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">label</pre> - Optional label (also sets aria-label)</li>
					</ul>
				</div>

				<div className="my-12">
					<h2 className="mb-3">Install</h2>
					<CopyBlock
						text={install}
						language="react"
						theme={dracula}
						showLineNumbers
						wrapLines
					/>
				</div>
				
				<div className="my-12">
					<h2 className="mb-3">Usage</h2>
					<CopyBlock
						text={usage}
						language="react"
						theme={dracula}
						showLineNumbers
						wrapLines
					/>
				</div>
				
				<div className="my-12">
					<h2 className="mb-3">Source</h2>
					<CopyBlock
						text={code}
						language="react"
						theme={dracula}
						showLineNumbers
						wrapLines
					/>
				</div>

      </div>
    </div>
  );
};

export default StateSelectPage;