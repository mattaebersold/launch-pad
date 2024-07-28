import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';

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
    <div className="flex items-start w-11/12 max-w-[1400px] mx-auto py-12">
      <Sidebar />
      <div className="grow relative">
				<Badge color="green">Organism</Badge>
        <h1 className="text-3xl font-bold mb-6">Half Block</h1>

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

export default HalfBlock;