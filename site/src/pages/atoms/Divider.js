import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';
import { LPDivider } from "../../components/launch-pad/atoms/LPDivider";

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../../components/globals/layout/Layout"

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
				<Badge color="cyan">Atom</Badge>
				<LayoutHeading text="Divider" />

				<div className="my-12">
					<h2 className="mb-3">Example</h2>
					<LPDivider theme='dark' />
				</div>

				<div className="my-12">
					<h2 className="mb-3">Params</h2>
					<ul>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">theme</pre> - 'dark' or 'light'</li>
					</ul>
				</div>

				<div className="my-12">
					<h2 className="mb-3">Variants</h2>
					<p>Variant examples</p>

					<LPDivider theme='light' />
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

export default Input;
