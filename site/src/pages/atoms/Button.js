import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';

import { LPButton } from "../../components/launch-pad/atoms/LPButton"

const Button = () => {

	const code = `
import React from "react";

const ButtonExample = () => {
	return (
		<>
			<LPButton>Button (Primary)</LPButton>
			<LPButton variant='secondary'>Button (secondary)</LPButton>
			<LPButton variant='destructive'>Button (destructive)</LPButton>
			<LPButton variant='outline'>Button (outline)</LPButton>
			<LPButton variant='link'>Button (link)</LPButton>
			<LPButton variant='ghost'>Button (ghost)</LPButton>
		</>
	);
};

export default ButtonExample;
	`

  return (
    <div className="flex items-start w-11/12 max-w-[1400px] mx-auto py-12">
      <Sidebar />
      <div className="grow relative">
				<Badge color="cyan">Atom</Badge>
        <h1 className="text-3xl font-bold mb-6">Button</h1>

				<div className="my-12">
					<h2 className="mb-3">Example</h2>
					
					<div className="my-4">
						<LPButton>Button (Primary)</LPButton>
					</div>
					
					<div className="my-4">
						<LPButton variant='secondary'>Button (secondary)</LPButton>
					</div>
					
					<div className="my-4">
						<LPButton variant='destructive'>Button (destructive)</LPButton>
					</div>
					
					<div className="my-4">
						<LPButton variant='outline'>Button (outline)</LPButton>
					</div>

					<div className="my-4">
						<LPButton variant='link'>Button (link)</LPButton>
					</div>
	
					<div className="my-4">
						<LPButton variant='ghost'>Button (ghost)</LPButton>
					</div>
				</div>

				<div className="my-12">
					<h2 className="mb-3">Variations</h2>
					<ul>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">primary (default)</pre> - light bg, dark text</li>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">secondary</pre> - dark bg, light text</li>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">destructive</pre> - red bg, light text</li>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">outline</pre> - white border, white text</li>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">link</pre> - no border, white text</li>
						<li className="flex items-center my-3"><pre className="mr-2 bg-black/80 p-1 px-3 rounded-[5px]">ghost</pre> - border on hover</li>
					</ul>
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

export default Button;