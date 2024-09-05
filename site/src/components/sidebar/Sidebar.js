import React from "react";
import LaunchPadNavLink from "../globals/LaunchPadNavLink"
import { Badge } from '@radix-ui/themes';

import { LPSidebar } from "../launch-pad/organisms/LPSidebar"
import { LPDivider } from "../launch-pad/atoms/LPDivider"

import { 
	LPCollapsableContainer,
	LPCollapsableContainerHeading,
	LPCollapsableContainerContent
} from "../launch-pad/organisms/LPCollapsableContainer"

const Sidebar = () => {
  return (
		<>
			<LPSidebar>

				{/* Atoms */}
				<LPCollapsableContainer startShown={true}>

					<LPCollapsableContainerHeading>
						<Badge color="cyan">Atoms</Badge>
					</LPCollapsableContainerHeading>

					<LPCollapsableContainerContent>
						<ul className="my-3">
							
							<li className="ml-0">
								<LaunchPadNavLink to="/atoms/select" label="Select" />
							</li>

							<li className="ml-0">
								<LaunchPadNavLink to="/atoms/button" label="Button" />
							</li>
							
							<li className="ml-0">	
								<LaunchPadNavLink to="/atoms/input" label="Input" />					
							</li>

							<li className="ml-0">	
								<LaunchPadNavLink to="/atoms/checkbox" label="Checkbox" />					
							</li>

							<li className="ml-0">	
								<LaunchPadNavLink to="/atoms/radio-group" label="Radio Group" />					
							</li>

							<li className="ml-0">	
								<LaunchPadNavLink to="/atoms/light-switch" label="Light Switch" />					
							</li>

							<li className="ml-0">	
								<LaunchPadNavLink to="/atoms/divider" label="Divider" />					
							</li>
							
						</ul>
					</LPCollapsableContainerContent>
		
				</LPCollapsableContainer>

				<LPDivider theme='dark' />	

				{/* Molecules */}
				<LPCollapsableContainer startShown={true}>

					<LPCollapsableContainerHeading>
						<Badge color="orange">Molecules</Badge>
					</LPCollapsableContainerHeading>

					<LPCollapsableContainerContent>
						<ul className="my-3">
							<li className="ml-0">
								<LaunchPadNavLink to="/molecules/button-list" label="Button List" />
							</li>

							<li className="ml-0">	
								<LaunchPadNavLink to="/molecules/state-select" label="State Select" />					
							</li>

							<li className="ml-0">
								<LaunchPadNavLink to="/molecules/menu" label="Menu" />
							</li>

							<li className="ml-0">
								<LaunchPadNavLink to="/molecules/collapsable-container" label="Collapsable Container" />
							</li>

						</ul>
					</LPCollapsableContainerContent>


				</LPCollapsableContainer>

				<LPDivider theme='dark' />	

				{/* Organisms */}
				<LPCollapsableContainer startShown={true}>

					<LPCollapsableContainerHeading>
						<Badge color="green">Organisms</Badge>
					</LPCollapsableContainerHeading>

					<LPCollapsableContainerContent>
						<ul className="my-3">
							<li className="ml-0">
								<LaunchPadNavLink to="/organisms/dropdown-menu" label="Dropdown Menu" />
							</li>
							<li className="ml-0">
								<LaunchPadNavLink to="/organisms/grid" label="Grid" />
							</li>
							<li className="ml-0">
								<LaunchPadNavLink to="/organisms/sidebar" label="Sidebar" />
							</li>
							{/* <li className="ml-0">
								<LaunchPadNavLink to="/organisms/half-block" label="Half Block" />
							</li> */}
						</ul>
					</LPCollapsableContainerContent>


				</LPCollapsableContainer>

			</LPSidebar>
			
		
		</>
  );
};

export default Sidebar;
