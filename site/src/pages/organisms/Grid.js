import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';
import LPGrid from "../../components/launch-pad/organisms/LPGrid"

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
				<Badge color="green">Organism</Badge>
				<LayoutHeading text="" />

				<div className="my-12">
					<h2 className="mb-3">Example</h2>
					<LPGrid mobileCarousel={true}>
						{cells.map((cell, index) => (
							<div key={index} className="p-5 m-2 bg-black rounded-[10px]">{cell}</div>
						))}
					</LPGrid>
				</div>

				<div className="my-12">
					<h2 className="mb-3">Variants</h2>
					<p>Variant examples</p>
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

export default Grid;