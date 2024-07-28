import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';

import {
  LPDropdown,
  LPDropdownTrigger,
  LPDropdownContent,
	LPDropdownMenuItem,
  LPDropdownMenuLabel,
  LPDropdownMenuSeparator,
} from "../../components/launch-pad/organisms/LPDropdown"


import { LPButton } from "../../components/launch-pad/atoms/LPButton"

const HalfBlock = () => {

	const code = `
import React from "react";
import {
	LPDropdown,
	LPDropdownTrigger,
	LPDropdownContent,
} from "../../components/launch-pad/organisms/LPDropdown"

import {
	LPMenuLabel,
	LPDivider,
	LPMenuItem,
} from "../../components/launch-pad/molecules/LPMenu"

const DropdownMenuExample = () => {
	return (
		<>
			<LPDropdown>
					<LPDropdownTrigger>
						<LPButton>Open</LPButton>
					</LPDropdownTrigger>
					<LPDropdownContent>
						<LPDropdownMenuLabel>My Account</LPDropdownMenuLabel>
						<LPDropdownMenuSeparator />
						<LPDropdownMenuItem>Profile</LPDropdownMenuItem>
						<LPDropdownMenuItem>Billing</LPDropdownMenuItem>
						<LPDropdownMenuItem>Team</LPDropdownMenuItem>
						<LPDropdownMenuItem>Subscription</LPDropdownMenuItem>
					</LPDropdownContent>
				</LPDropdown>
		</>
	);
};
	
export default DropdownMenuExample;
		`
	

  return (
    <div className="flex items-start w-11/12 max-w-[1400px] mx-auto py-12">
      <Sidebar />
      <div className="grow relative">
				<Badge color="green">Organism</Badge>
        <h1 className="text-3xl font-bold mb-6">Dropdown Menu</h1>

				<div className="my-12">
					<h2 className="mb-3">Example</h2>

					<LPDropdown>
						<LPDropdownTrigger>
							<LPButton>Open</LPButton>
						</LPDropdownTrigger>
						<LPDropdownContent>
							<LPDropdownMenuLabel>My Account</LPDropdownMenuLabel>
							<LPDropdownMenuSeparator />
							<LPDropdownMenuItem>Profile</LPDropdownMenuItem>
							<LPDropdownMenuItem>Billing</LPDropdownMenuItem>
							<LPDropdownMenuItem>Team</LPDropdownMenuItem>
							<LPDropdownMenuItem>Subscription</LPDropdownMenuItem>
						</LPDropdownContent>
					</LPDropdown>

					
				</div>

				<div className="my-12">
					<h2 className="mb-3">Variants</h2>
					<p>Variant examples</p>
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

export default HalfBlock;