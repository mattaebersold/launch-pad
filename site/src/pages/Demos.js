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
        <LayoutHeading text="Demos" />
        <p>Coming Soon</p>
      </LayoutMainColumn>
    </LayoutContainer>
  );
};

export default Demos;
