import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../../components/globals/layout/Layout"

const ButtonList = () => {

	const code = `
	import React from "react";
	
	const ButtonList = () => {
		return (
			<>
				<p>Test</p>
			</>
		);
	};
	
	export default ButtonList;
		`
	

  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutMainColumn>
				<Badge color="orange">Molecule</Badge>
				<LayoutHeading text="Button List" />

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

export default ButtonList;