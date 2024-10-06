import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { CopyBlock, dracula } from 'react-code-blocks';
import { LPDivider } from "../../components/launch-pad/atoms/LPDivider";

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

const Input = () => {

	const code = `
import React from 'react';
import { LPDivider } from "../../components/launch-pad/atoms/LPDivider";

export default function DividerExample() {
	return (
		<LPDivider theme='dark' />
	);
}
		`
	
	return (
		<LayoutContainer>
			<Sidebar />
			<LayoutMainColumn>
				<LayoutHeading text="Divider" badge="Atom" />

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true}>
						<LPCollapsableContainerHeading>
							<h2>Example</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<div className="mb-6">
								<LPDivider theme='dark' />
							</div>
						</LPCollapsableContainerContent>
					</LPCollapsableContainer>
				</div>


				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true}>
						<LPCollapsableContainerHeading>
							<h2>Params</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<ParamContainer>
								<Param label="theme" description="'dark' or 'light'" />
							</ParamContainer>
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
								<LPDivider theme='light' />
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

export default Input;
