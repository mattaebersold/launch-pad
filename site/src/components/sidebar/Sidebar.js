import React from "react";
import LaunchPadNavLink from "../globals/LaunchPadNavLink"
import { Badge } from '@radix-ui/themes';

const Sidebar = () => {
  return (
		<>
			<div className="w-[200px] p-6 mr-12 border-2 border-red rounded-[10px]">
				<Badge color="blue">Primitive</Badge>
				<ul className="mt-3 mb-12">
					<li className="ml-0">
						<LaunchPadNavLink to="/primitives/button" label="Button" />
					</li>
					<li className="ml-0">	
						<LaunchPadNavLink to="/primitives/input" label="Input" />					
					</li>
				</ul>

				<Badge color="orange">Component</Badge>
				<ul className="my-3 mb-12">
					<li className="ml-0">
						<LaunchPadNavLink to="/components/button-list" label="Button List" />
					</li>
				</ul>


				<Badge color="green">Block</Badge>
				<ul className="mt-3 mb-6">
					<li className="ml-0">
						<LaunchPadNavLink to="/blocks/half-block" label="Half Block" />
					</li>
				</ul>
			</div>
		</>
  );
};

export default Sidebar;
