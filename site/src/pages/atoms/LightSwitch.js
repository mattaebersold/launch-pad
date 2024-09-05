import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';
import LPLightSwitch from "../../components/launch-pad/atoms/LPLightSwitch";
import { useForm, FormProvider } from 'react-hook-form';

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../../components/globals/layout/Layout"

const LightSwitch = () => {
	const form = useForm();
	const { register } = form;


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
				<Badge color="cyan">Atom</Badge>
				<LayoutHeading text="Checkbox" />

				<div className="my-12">
					<h2 className="mb-3">Example</h2>
					<FormProvider {...form}>
						<form>
							<LPLightSwitch 
								name=''
								label='Toggle Me' />
						</form>
					</FormProvider>
				</div>
				
				<div className="my-12">
					<h2 className="mb-3">Usage</h2>
					<CopyBlock
						text={usage}
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

export default LightSwitch;
