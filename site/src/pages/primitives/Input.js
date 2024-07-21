import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';

const Input = () => {

	const code = `
	import React from "react";
	
	const Input = () => {
		return (
			<>
				<p>Test</p>
			</>
		);
	};
	
	export default Input;
		`
	

  return (
    <div className="flex items-start w-11/12 mx-auto py-12">
      <Sidebar />
      <div className="grow relative">
				<Badge color="blue">Primitive</Badge>
        <h1 className="text-3xl font-bold mb-6">Input</h1>

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
      </div>
    </div>
  );
};

export default Input;
