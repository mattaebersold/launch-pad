import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { CopyBlock, dracula } from 'react-code-blocks';
import LPGrid from "../../components/launch-pad/organisms/LPGrid"

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

const Grid = () => {

	const code = `
	import React from "react";
	
	const GridExample = () => {
		const cells = Array(8).fill('Cell');
		return (
			<>
				<LPGrid mobileCarousel={true}>
					{cells.map((cell, index) => (
						<div key={index} className="p-5 m-2 bg-black rounded-[10px]">{cell}</div>
					))}
				</LPGrid>
			</>
		);
	};
	
	export default GridExample;
		`
	const cells = Array(8).fill('Cell');

  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutMainColumn>
				<LayoutHeading text="Grid" badge="Organism" />

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true}>
						<LPCollapsableContainerHeading>
							<h2>Example</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<div className="mb-6">
								<LPGrid mobileCarousel={true}>
									{cells.map((cell, index) => (
										<div key={index} className="p-5 m-2 bg-black rounded-[10px]">{cell}</div>
									))}
								</LPGrid>
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

export default Grid;