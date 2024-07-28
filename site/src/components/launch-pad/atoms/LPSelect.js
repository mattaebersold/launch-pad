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
