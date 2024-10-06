import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { CopyBlock, dracula } from 'react-code-blocks';

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../../components/globals/layout/Layout"

import { 
	LPCollapsableContainer,
	LPCollapsableContainerHeading,
	LPCollapsableContainerContent
} from "../../components/launch-pad/organisms/LPCollapsableContainer"

import {
	ParamContainer,
	Param,
} from "../../components/globals/Params"

const CollapsableContainerPage = () => {

	const code = `
import React from 'react';
import { 
	LPCollapsableContainer,
	LPCollapsableContainerHeading,
	LPCollapsableContainerContent
} from "../../components/launch-pad/organisms/LPCollapsableContainer"

export default function CollapsableContentExample() {
	return (
		<LPCollapsableContainer startShown={false}>

			<LPCollapsableContainerHeading>
				<p>HEADING</p>
			</LPCollapsableContainerHeading>

			<LPCollapsableContainerContent>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas elit id felis scelerisque fringilla. Ut vel ante euismod, egestas nibh ac, vehicula velit. Duis vestibulum faucibus erat, a gravida nibh commodo ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper ex sed interdum semper.</p>
			</LPCollapsableContainerContent>

		</LPCollapsableContainer>
	);
}
		`
	
	return (
		<LayoutContainer>
			<Sidebar />
			<LayoutMainColumn>
				<LayoutHeading text="Collapsable Container" badge="Molecule" />

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true}>
						<LPCollapsableContainerHeading>
							<h2>Example</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<div className="mb-6">
							<LPCollapsableContainer startShown={false}>

								<LPCollapsableContainerHeading>
									<p>HEADING</p>
								</LPCollapsableContainerHeading>

								<LPCollapsableContainerContent>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas elit id felis scelerisque fringilla. Ut vel ante euismod, egestas nibh ac, vehicula velit. Duis vestibulum faucibus erat, a gravida nibh commodo ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper ex sed interdum semper.</p>
								</LPCollapsableContainerContent>

								</LPCollapsableContainer>
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
								<Param label="startShown" description="boolean" />
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
							<p>Variant examples</p>
							<p>Start Shown</p>
							<LPCollapsableContainer startShown={true}>

								<LPCollapsableContainerHeading>
									<p>HEADING</p>
								</LPCollapsableContainerHeading>

								<LPCollapsableContainerContent>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas elit id felis scelerisque fringilla. Ut vel ante euismod, egestas nibh ac, vehicula velit. Duis vestibulum faucibus erat, a gravida nibh commodo ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper ex sed interdum semper.</p>
								</LPCollapsableContainerContent>
					
							</LPCollapsableContainer>
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

export default CollapsableContainerPage;
