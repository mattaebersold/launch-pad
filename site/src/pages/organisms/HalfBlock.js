import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../../components/globals/layout/Layout"

const HalfBlock = () => {

	const code = `
	import React from "react";
	
	const HalfBlock = () => {
		return (
			<>
				<p>Test</p>
			</>
		);
	};
	
	export default HalfBlock;
		`
	

  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutMainColumn>
				<Badge color="green">Organism</Badge>
				<LayoutHeading text="Half Block" />

				<div className="my-12">
					<h2 className="mb-3">Example</h2>
					<p>Example Here</p>
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

export default HalfBlock;