import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';

import { LPButton } from "../../components/launch-pad/atoms/LPButton"
import { LPSeparator } from "../../components/launch-pad/atoms/LPSeparator"
import { LPLabel } from "../../components/launch-pad/atoms/LPLabel"

import { LPMenu } from "../../components/launch-pad/molecules/LPMenu"

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
    <div className="flex items-start w-11/12 max-w-[1400px] mx-auto py-12">
      <Sidebar />
      <div className="grow relative">
				<Badge color="orange">Molecule</Badge>
        <h1 className="text-3xl font-bold mb-6">Menu</h1>

				<div className="my-12">
					<h2 className="mb-3">Example</h2>
					<LPMenu>      
						<LPLabel>My Account</LPLabel>
						<LPSeparator />
						<LPButton variant="link">Profile</LPButton>
						<LPButton variant="link">Billing</LPButton>
						<LPButton variant="link">Team</LPButton>
						<LPButton variant="link">Subscription</LPButton>
					</LPMenu>
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

export default MenuPage;