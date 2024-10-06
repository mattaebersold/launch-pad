import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import AnimateHeight from 'react-animate-height';

const LPCollapsableContainer = ({ startShown, children, outline }) => {
  const [isOpen, setIsOpen] = useState(startShown);
  const [height, setHeight] = useState(startShown ? 'auto' : 0);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setHeight((prevHeight) => (prevHeight === 0 ? 'auto' : 0));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.type === LPCollapsableContainerHeading) {
          return React.cloneElement(child, { onToggle: toggleOpen, isOpen });
        }
        if (child.type === LPCollapsableContainerContent) {
          return (
            <AnimateHeight duration={500} height={height}>
              {child}
            </AnimateHeight>
          );
        }
        return child;
      })}
    </div>
  );
};


const LPCollapsableContainerHeading = React.forwardRef(({ isOpen, onToggle, className, inset, children }, ref) => (
  <div onClick={onToggle} className="cursor-pointer px-3 py-2 flex items-center">
    <div className="grow">
			{children}
		</div>

		<div 
			className="ml-2 transition"
			style={{
				transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
			}}>
			<FaAngleDown />
		</div>
  </div>
))

const LPCollapsableContainerContent = React.forwardRef(({ className, inset, children }, ref) => (
  <div className="px-3 py-1">
    {children}
  </div>
))
 
export {
  LPCollapsableContainer,
	LPCollapsableContainerHeading,
	LPCollapsableContainerContent
}