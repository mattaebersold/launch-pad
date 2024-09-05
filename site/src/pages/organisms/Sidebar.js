import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
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
				<Badge color="green">Organism</Badge>
				<LayoutHeading text="Sidebar" />

				<div className="my-12">
					<h2 className="mb-3">Example</h2>
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
			</LayoutMainColumn>
		</LayoutContainer>
	);
};

export default SidebarPage;
