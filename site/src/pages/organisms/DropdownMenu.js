import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { CopyBlock, dracula } from 'react-code-blocks';

import {
  LPDropdown,
  LPDropdownTrigger,
  LPDropdownContent,
	LPDropdownMenuItem,
  LPDropdownMenuLabel,
  LPDropdownMenuSeparator,
} from "../../components/launch-pad/organisms/LPDropdown"

import { 
	LPCollapsableContainer,
	LPCollapsableContainerHeading,
	LPCollapsableContainerContent,
} from "../../components/launch-pad/organisms/LPCollapsableContainer"


import { LPButton } from "../../components/launch-pad/atoms/LPButton"

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../../components/globals/layout/Layout"

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
    <LayoutContainer>
      <Sidebar />
      <LayoutMainColumn>
				<LayoutHeading text="Dropdown Menu" badge="Organism" />

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true}>
						<LPCollapsableContainerHeading>
							<h2>Example</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<div className="mb-6">
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

				<div className="px-6">
					<LPCollapsableContainer startShown={false}>
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

export default HalfBlock;