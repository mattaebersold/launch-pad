import React from "react";
import LaunchPadNavLink from "../globals/LaunchPadNavLink"
import { Badge } from '@radix-ui/themes';

const Sidebar = () => {
  return (
		<>
			<div className="w-[200px] p-6 mr-12 bg-black/50 rounded-[10px] shrink-0">
				<Badge color="cyan">Atoms</Badge>
				<ul className="mt-3 mb-12">
	
					<li className="ml-0">
						<LaunchPadNavLink to="/atoms/select" label="Select" />
					</li>
	
					<li className="ml-0">
						<LaunchPadNavLink to="/atoms/button" label="Button" />
					</li>
					
					<li className="ml-0">	
						<LaunchPadNavLink to="/atoms/input" label="Input" />					
					</li>
					
				</ul>

				<Badge color="orange">Molecules</Badge>
				<ul className="my-3 mb-12">
					{/* <li className="ml-0">
						<LaunchPadNavLink to="/molecules/button-list" label="Button List" />
					</li> */}
					<li className="ml-0">	
						<LaunchPadNavLink to="/molecules/state-select" label="State Select" />					
					</li>

					<li className="ml-0">
						<LaunchPadNavLink to="/molecules/menu" label="Menu" />
					</li>

				</ul>


				<Badge color="green">Organisms</Badge>
				<ul className="mt-3 mb-6">
					<li className="ml-0">
						<LaunchPadNavLink to="/organisms/dropdown-menu" label="Dropdown Menu" />
					</li>
					{/* <li className="ml-0">
						<LaunchPadNavLink to="/organisms/half-block" label="Half Block" />
					</li> */}
				</ul>
			</div>
		</>
  );
};

export default Sidebar;
