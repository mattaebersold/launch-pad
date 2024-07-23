import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import StateSelect from "../../components/launch-pad/molecules/StateSelect"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';

const StateSelectPage = () => {

	const install = `
    yarn add @radix-ui/react-icons
    yarn add @radix-ui/react-select
  `

	const code = `
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import React from 'react';


// Define SelectItem component first
const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <Select.Item 
			className='SelectItem
				leading-none
				rounded-md
				flex
				items-center
        text-black
				h-7
				px-5
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
SelectItem.displayName = 'SelectItem';

const StateSelect = ({
  elementId,
  elementName
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
					focus:outline-none" aria-label="State">
          <Select.Value placeholder="Select a state…" />
          <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="SelectContent overflow-hidden bg-white rounded-xl shadow-xl">
            <Select.ScrollUpButton 
							className="SelectScrollButton
								flex
								items-center
								justify-center
								h-9
								bg-white
								cursor-default">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="SelectViewport p-1">
              <Select.Group>
                <SelectItem  value="Alabama">Alabama</SelectItem>
                <SelectItem value="Alaska">Alaska</SelectItem>
                <SelectItem value="Arizona">Arizona</SelectItem>
                <SelectItem value="Arkansas">Arkansas</SelectItem>
                <SelectItem value="California">California</SelectItem>
                <SelectItem value="Colorado">Colorado</SelectItem>
                <SelectItem value="Connecticut">Connecticut</SelectItem>
                <SelectItem value="Delaware">Delaware</SelectItem>
                <SelectItem value="District Of Columbia">District Of Columbia</SelectItem>
                <SelectItem value="Florida">Florida</SelectItem>
                <SelectItem value="Georgia">Georgia</SelectItem>
                <SelectItem value="Hawaii">Hawaii</SelectItem>
                <SelectItem value="Idaho">Idaho</SelectItem>
                <SelectItem value="Illinois">Illinois</SelectItem>
                <SelectItem value="Indiana">Indiana</SelectItem>
                <SelectItem value="Iowa">Iowa</SelectItem>
                <SelectItem value="Kansas">Kansas</SelectItem>
                <SelectItem value="Kentucky">Kentucky</SelectItem>
                <SelectItem value="Louisiana">Louisiana</SelectItem>
                <SelectItem value="Maine">Maine</SelectItem>
                <SelectItem value="Maryland">Maryland</SelectItem>
                <SelectItem value="Massachusetts">Massachusetts</SelectItem>
                <SelectItem value="Michigan">Michigan</SelectItem>
                <SelectItem value="Minnesota">Minnesota</SelectItem>
                <SelectItem value="Mississippi">Mississippi</SelectItem>
                <SelectItem value="Missouri">Missouri</SelectItem>
                <SelectItem value="Montana">Montana</SelectItem>
                <SelectItem value="Nebraska">Nebraska</SelectItem>
                <SelectItem value="Nevada">Nevada</SelectItem>
                <SelectItem value="New Hampshire">New Hampshire</SelectItem>
                <SelectItem value="New Jersey">New Jersey</SelectItem>
                <SelectItem value="New Mexico">New Mexico</SelectItem>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="North Carolina">North Carolina</SelectItem>
                <SelectItem value="North Dakota">North Dakota</SelectItem>
                <SelectItem value="Ohio">Ohio</SelectItem>
                <SelectItem value="Oklahoma">Oklahoma</SelectItem>
                <SelectItem value="Oregon">Oregon</SelectItem>
                <SelectItem value="Pennsylvania">Pennsylvania</SelectItem>
                <SelectItem value="Rhode Island">Rhode Island</SelectItem>
                <SelectItem value="South Carolina">South Carolina</SelectItem>
                <SelectItem value="South Dakota">South Dakota</SelectItem>
                <SelectItem value="Tennessee">Tennessee</SelectItem>
                <SelectItem value="Texas">Texas</SelectItem>
                <SelectItem value="Utah">Utah</SelectItem>
                <SelectItem value="Vermont">Vermont</SelectItem>
                <SelectItem value="Virginia">Virginia</SelectItem>
                <SelectItem value="Washington">Washington</SelectItem>
                <SelectItem value="West Virginia">West Virginia</SelectItem>
                <SelectItem value="Wisconsin">Wisconsin</SelectItem>
                <SelectItem value="Wyoming">Wyoming</SelectItem>
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


export default StateSelect;
	`

  return (
    <div className="flex items-start w-11/12 max-w-[1400px] mx-auto py-12">
      <Sidebar />
      <div className="grow relative">
				<Badge color="orange">Molecules</Badge>
        <h1 className="text-3xl font-bold mb-6">State Select Dropdown</h1>

				<div className="my-12">
					<h2 className="mb-3">Example</h2>
					<StateSelect />
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