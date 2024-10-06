import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { CopyBlock, dracula } from 'react-code-blocks';

import { LPButton } from "../../components/launch-pad/atoms/LPButton"
import { LPSeparator } from "../../components/launch-pad/atoms/LPSeparator"
import { LPLabel } from "../../components/launch-pad/atoms/LPLabel"

import { LPMenu } from "../../components/launch-pad/molecules/LPMenu"

import { 
	LPCollapsableContainer,
	LPCollapsableContainerHeading,
	LPCollapsableContainerContent,
} from "../../components/launch-pad/organisms/LPCollapsableContainer"

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../../components/globals/layout/Layout"

const MenuPage = () => {

	const code = `
import React from 'react';

import {
	LPMenu,
  LPMenuLabel,
  LPSeparator,
  LPMenuItem,
} from "../../components/launch-pad/molecules/LPMenu"

const MenuExample = () => {
  return (

    <LPMenu>      
      <LPLabel>My Account</LPMenuLabel>
			<LPSeparator />
			<LPButton variant="link">Profile</LPButton>
			<LPButton variant="link">Billing</LPButton>
			<LPButton variant="link">Team</LPButton>
			<LPButton variant="link">Subscription</LPButton>
    </LPMenu>
 
  )
}

export default MenuExample;
	`

  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutMainColumn>
				<LayoutHeading text="Menu" badge="Molecule" />

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true}>
						<LPCollapsableContainerHeading>
							<h2>Example</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<div className="mb-6">
							<LPMenu>      
								<LPLabel>My Account</LPLabel>
								<LPSeparator />
								<LPButton variant="link">Profile</LPButton>
								<LPButton variant="link">Billing</LPButton>
								<LPButton variant="link">Team</LPButton>
								<LPButton variant="link">Subscription</LPButton>
							</LPMenu>
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
							<div className="mb-6">
							<CopyBlock
								text={code}
								language="react"
								theme={dracula}
								showLineNumbers
								wrapLines />
							</div>
						</LPCollapsableContainerContent>
					</LPCollapsableContainer>
				</div>

      </LayoutMainColumn>
    </LayoutContainer>
  );
};

export default MenuPage;