import React from "react";

const Sidebar = () => {
  return (
		<>
			<div className="w-[250px] p-6 mr-12 border-2 border-red rounded-[10px]">
				<h4 className="font-bold">Primitives</h4>
				<ul className="mt-3 mb-12">
					<li className="ml-0">Button</li>
					<li className="ml-0">Input</li>
				</ul>

				<h4 className="font-bold">Components</h4>
				<ul className="my-3 mb-12">
					<li className="ml-0">Button List</li>
				</ul>


				<h4 className="font-bold">Blocks</h4>
				<ul className="mt-3 mb-6">
					<li className="ml-0">Half Block</li>
				</ul>
			</div>
		</>
  );
};

export default Sidebar;
