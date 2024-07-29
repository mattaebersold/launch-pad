import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import { Badge } from '@radix-ui/themes';
import { CopyBlock, dracula } from 'react-code-blocks';
import LPGrid from "../../components/launch-pad/organisms/LPGrid"

const Grid = () => {

	const code = `
	import React from "react";
	
	const GridExample = () => {
		const cells = Array(8).fill('Cell');
		return (
			<>
				<LPGrid mobileCarousel={true}>
					{cells.map((cell, index) => (
						<div key={index} className="p-5 m-2 bg-black rounded-[10px]">{cell}</div>
					))}
				</LPGrid>
			</>
		);
	};
	
	export default GridExample;
		`
	const cells = Array(8).fill('Cell');

  return (
    <div className="flex items-start w-11/12 max-w-[1400px] mx-auto py-12">
      <Sidebar />
      <div className="grow relative">
				<Badge color="green">Organism</Badge>
        <h1 className="text-3xl font-bold mb-6">Grid</h1>

				<div className="my-12">
					<h2 className="mb-3">Example</h2>
					<LPGrid mobileCarousel={true}>
						{cells.map((cell, index) => (
							<div key={index} className="p-5 m-2 bg-black rounded-[10px]">{cell}</div>
						))}
					</LPGrid>
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

export default Grid;