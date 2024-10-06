import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { CopyBlock, dracula } from 'react-code-blocks';
import { LPInput } from "../../components/launch-pad/atoms/LPInput";

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

import {
	ParamContainer,
	Param,
} from "../../components/globals/Params"

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
				<LayoutHeading text="Input" badge="Atom" />

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true}>
						<LPCollapsableContainerHeading>
							<h2>Example</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<div className="mb-6">
								<LPInput name='name' label='label' type='type' />
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
								<Param label="name" description="input element name" />
								<Param label="label" description="label" />
								<Param label="type" description="type of the input (text, number, password)" />
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

export default Input;
