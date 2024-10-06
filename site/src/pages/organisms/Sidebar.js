import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { CopyBlock, dracula } from 'react-code-blocks';

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../../components/globals/layout/Layout"


import { LPSidebar } from "../../components/launch-pad/organisms/LPSidebar"
import { LPDivider } from "../../components/launch-pad/atoms/LPDivider"

import { 
	LPCollapsableContainer,
	LPCollapsableContainerHeading,
	LPCollapsableContainerContent
} from "../../components/launch-pad/organisms/LPCollapsableContainer"



const SidebarPage = () => {

	const code = `
import React from 'react';
import { LPSidebar } from "../../components/launch-pad/organisms/LPSidebar"
import { LPDivider } from "../../components/launch-pad/atoms/LPDivider"

import { 
	LPCollapsableContainer,
	LPCollapsableContainerHeading,
	LPCollapsableContainerContent
} from "../../components/launch-pad/organisms/LPCollapsableContainer"


export default function DividerExample() {
	return (
		<LPSidebar>

			<LPCollapsableContainer startShown={true}>

				<LPCollapsableContainerHeading>
					<p>Container 1</p>
				</LPCollapsableContainerHeading>

				<LPCollapsableContainerContent>
					<p>Container Item</p>
					<p>Container Item</p>
					<p>Container Item</p>
					<p>Container Item</p>
					<p>Container Item</p>
					<p>Container Item</p>
				</LPCollapsableContainerContent>
	
			</LPCollapsableContainer>

			<LPDivider theme='dark' />	

			<LPCollapsableContainer startShown={false}>

			<LPCollapsableContainerHeading>
					<p>Container 2</p>
				</LPCollapsableContainerHeading>

				<LPCollapsableContainerContent>
					<p>Container Item</p>
					<p>Container Item</p>
					<p>Container Item</p>
					<p>Container Item</p>
					<p>Container Item</p>
					<p>Container Item</p>
				</LPCollapsableContainerContent>

			</LPCollapsableContainer>

			<LPDivider theme='dark' />	

			<LPCollapsableContainer startShown={false}>

			<LPCollapsableContainerHeading>
					<p>Container 3</p>
				</LPCollapsableContainerHeading>

				<LPCollapsableContainerContent>
					<p>Container Item</p>
					<p>Container Item</p>
					<p>Container Item</p>
					<p>Container Item</p>
					<p>Container Item</p>
					<p>Container Item</p>
				</LPCollapsableContainerContent>

			</LPCollapsableContainer>

		</LPSidebar>
	);
}
		`
	
	return (
		<LayoutContainer>
			<Sidebar />
			<LayoutMainColumn>
				<LayoutHeading text="Sidebar" badge="Organism" />

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true}>
						<LPCollapsableContainerHeading>
							<h2>Example</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
						<LPSidebar>

							<LPCollapsableContainer startShown={true}>

								<LPCollapsableContainerHeading>
									<p>Container 1</p>
								</LPCollapsableContainerHeading>

								<LPCollapsableContainerContent>
									<p>Container Item</p>
									<p>Container Item</p>
									<p>Container Item</p>
									<p>Container Item</p>
									<p>Container Item</p>
									<p>Container Item</p>
								</LPCollapsableContainerContent>

							</LPCollapsableContainer>

							<LPDivider theme='dark' />	

							<LPCollapsableContainer startShown={false}>

							<LPCollapsableContainerHeading>
									<p>Container 2</p>
								</LPCollapsableContainerHeading>

								<LPCollapsableContainerContent>
									<p>Container Item</p>
									<p>Container Item</p>
									<p>Container Item</p>
									<p>Container Item</p>
									<p>Container Item</p>
									<p>Container Item</p>
								</LPCollapsableContainerContent>

							</LPCollapsableContainer>

							<LPDivider theme='dark' />	

							<LPCollapsableContainer startShown={false}>

							<LPCollapsableContainerHeading>
									<p>Container 3</p>
								</LPCollapsableContainerHeading>

								<LPCollapsableContainerContent>
									<p>Container Item</p>
									<p>Container Item</p>
									<p>Container Item</p>
									<p>Container Item</p>
									<p>Container Item</p>
									<p>Container Item</p>
								</LPCollapsableContainerContent>

							</LPCollapsableContainer>

							</LPSidebar>
							<br />
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

export default SidebarPage;
