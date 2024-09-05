import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
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
				<Badge color="cyan">Atom</Badge>
				<LayoutHeading text="Divider" />

				<div className="my-12">
					<h2 className="mb-3">Example</h2>

					<LPCollapsableContainer startShown={false}>

						<LPCollapsableContainerHeading>
							<p>HEADING</p>
						</LPCollapsableContainerHeading>

						<LPCollapsableContainerContent>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas elit id felis scelerisque fringilla. Ut vel ante euismod, egestas nibh ac, vehicula velit. Duis vestibulum faucibus erat, a gravida nibh commodo ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper ex sed interdum semper.</p>
						</LPCollapsableContainerContent>
			
					</LPCollapsableContainer>
				</div>

				<div className="my-12">
					<h2 className="mb-3">Params</h2>
					<ul>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">startShown</pre> - boolean</li>
					</ul>
				</div>

				<div className="my-12">
					<h2 className="mb-3">Variants</h2>
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

export default CollapsableContainerPage;
