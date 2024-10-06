import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { CopyBlock, dracula } from 'react-code-blocks';

import { LPButton } from "../../components/launch-pad/atoms/LPButton"

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

import {
	ParamContainer,
	Param,
} from "../../components/globals/Params"

const Button = () => {

	const code = `
import React from "react";

const ButtonExample = () => {
	return (
		<>
			<LPButton>Button (Primary)</LPButton>
			<LPButton variant='secondary'>Button (secondary)</LPButton>
			<LPButton variant='destructive'>Button (destructive)</LPButton>
			<LPButton variant='outline'>Button (outline)</LPButton>
			<LPButton variant='link'>Button (link)</LPButton>
			<LPButton variant='ghost'>Button (ghost)</LPButton>
		</>
	);
};

export default ButtonExample;
	`

  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutMainColumn>
				<LayoutHeading badge="Atom" text="Button" />

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true} outline>
						<LPCollapsableContainerHeading>
							<h2>Example</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<div className="my-4">
								<LPButton>Button (Primary)</LPButton>
							</div>
							
							<div className="my-4">
								<LPButton variant='secondary'>Button (secondary)</LPButton>
							</div>
							
							<div className="my-4">
								<LPButton variant='destructive'>Button (destructive)</LPButton>
							</div>
							
							<div className="my-4">
								<LPButton variant='outline'>Button (outline)</LPButton>
							</div>

							<div className="my-4">
								<LPButton variant='link'>Button (link)</LPButton>
							</div>
			
							<div className="my-4">
								<LPButton variant='ghost'>Button (ghost)</LPButton>
							</div>
						</LPCollapsableContainerContent>
					</LPCollapsableContainer>
				</div>

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true}>
						<LPCollapsableContainerHeading>
							<h2>Variations</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<ParamContainer>
								<Param label="primary (default)" description="light bg, dark text" />
								<Param label="secondary" description="dark bg, light text" />
								<Param label="destructive" description="red bg, light text" />
								<Param label="outline" description="white border, white text" />
								<Param label="link" description="no border, white text" />
								<Param label="ghost" description="border on hover" />
							</ParamContainer>
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

export default Button;