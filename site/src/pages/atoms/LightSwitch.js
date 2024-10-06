import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { CopyBlock, dracula } from 'react-code-blocks';
import LPLightSwitch from "../../components/launch-pad/atoms/LPLightSwitch";
import { useForm, FormProvider } from 'react-hook-form';

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../../components/globals/layout/Layout"

import { 
	LPCollapsableContainer,
	LPCollapsableContainerHeading,
	LPCollapsableContainerContent,
} from "../../components/launch-pad/organisms/LPCollapsableContainer"

const LightSwitch = () => {
	const form = useForm();


	const usage = `
import React from 'react';
import LPCheckbox from "../../components/launch-pad/atoms/LPCheckbox";

export default function CheckboxExample() {
	return (
		<>
		
			<FormProvider {...form}>
				<form>
					<LPLightSwitch 
						name=''
						label='Toggle Me'/>
				</form>
			</FormProvider>

		</>
	);
}
	`

	return (
		<LayoutContainer>
			<Sidebar />
			<LayoutMainColumn>
				<LayoutHeading text="Lightswitch" badge="Atom" />

				<div className="px-6 border-b-2 border-black">
					<LPCollapsableContainer startShown={true}>
						<LPCollapsableContainerHeading>
							<h2>Example</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<FormProvider {...form}>
								<form className="mb-4">
									<LPLightSwitch 
										name=''
										label='Toggle Me' />
								</form>
							</FormProvider>
						</LPCollapsableContainerContent>
					</LPCollapsableContainer>
				</div>

				<div className="px-6">
					<LPCollapsableContainer startShown={false}>
						<LPCollapsableContainerHeading>
							<h2>Usage</h2>
						</LPCollapsableContainerHeading>
						<LPCollapsableContainerContent>
							<CopyBlock
								text={usage}
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

export default LightSwitch;
