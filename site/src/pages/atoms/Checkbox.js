import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';
import LPCheckbox from "../../components/launch-pad/atoms/LPCheckbox";
import { useForm, FormProvider } from 'react-hook-form';

const Input = () => {
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
					<LPCheckbox register={register} name='terms' label='Accept Terms & Conditions' required />
				</form>
			</FormProvider>

		</>
	);
}
	`

	const source = `
import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const LPCheckbox = ({ label, name, register }) => (
  <div className="flex items-center cursor-pointer">
    <Checkbox.Root
      className="
        bg-black 
        hover:bg-black 
        flex 
        h-[25px] 
        w-[25px] 
        appearance-none 
        items-center 
        justify-center 
        rounded-[4px]
        border-[1px]
        border-input 
        outline-none"
      id={name}
      {...register(name)}
      onCheckedChange={(checked) => {
        const event = {
          target: {
            name,
            value: checked,
          },
        };
        register(name).onChange(event);
      }}
    >
      <Checkbox.Indicator className="text-white">
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label
      className="
        pl-[15px] 
        text-[15px] 
        leading-none 
        text-white 
        relative 
        block
        cursor-pointer"
      htmlFor={name}
    >
      {label}
    </label>
  </div>
);

export default LPCheckbox;
	`
	

	return (
		<div className="flex items-start w-11/12 max-w-[1400px] mx-auto py-12">
			<Sidebar />
			<div className="grow relative">
				<Badge color="cyan">Atom</Badge>
				<h1 className="text-3xl font-bold mb-6">Checkbox</h1>

				<div className="my-12">
					<h2 className="mb-3">Example</h2>
					<FormProvider {...form}>
						<form>
							<LPCheckbox register={register} name='terms' label='Accept Terms & Conditions' required />
						</form>
					</FormProvider>
				</div>

				<div className="my-12">
					<h2 className="mb-3">Variants</h2>
					<p>Variant examples</p>
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

				<div className="my-12">
					<h2 className="mb-3">Source</h2>
					<CopyBlock
						text={source}
						language="react"
						theme={dracula}
						showLineNumbers
						wrapLines
					/>
				</div>
			</div>
		</div>
	);
};

export default Input;
