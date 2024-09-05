import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';
import { LPInput } from "../../components/launch-pad/atoms/LPInput";

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../../components/globals/layout/Layout"

const Input = () => {

	const code = `
import React from 'react';
import { LPInput } from "../../components/launch-pad/atoms/LPInput";

export default function InputExample() {
	return (
		<LPInput 
			name='name'
			label='label' 
			type='type' 
		/>
	);
}
		`
	

	return (
		<LayoutContainer>
			<Sidebar />
			<LayoutMainColumn>
				<Badge color="cyan">Atom</Badge>
				<LayoutHeading text="Input" />

				<div className="my-12">
					<h2 className="mb-3">Example</h2>
					<LPInput name='name' label='label' type='type' />
				</div>

				<div className="my-12">
					<h2 className="mb-3">Params</h2>
					<ul>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">name</pre> - input element name</li>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">label</pre> - label</li>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">type</pre> - type of the input (text, number, password)</li>
					</ul>
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

export default Input;
