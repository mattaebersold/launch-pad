import React from "react";
import Sidebar from "../components/sidebar/Sidebar"

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../components/globals/layout/Layout"


const Demos = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutMainColumn>
        <LayoutHeading text="Upcoming Additions" />
        <ul className="pt-5 pb-12 pl-4">
					<li>- Add vertical margin options to the divider</li>
					<li>- Collapse other lists within the wrapper when one is activated</li>
					<li>- Make collapse others an option</li>
					<li>- Fix State select</li>
					<li>- Add button list</li>
					<li>- Add Half Block</li>
					<li>- Add light or dark themes to all the inputs, checkboxes, radios, etc</li>
				</ul>
      </LayoutMainColumn>
    </LayoutContainer>
  );
};

export default Demos;
