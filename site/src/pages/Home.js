import React from "react";
import Sidebar from "../components/sidebar/Sidebar"

import {
	LayoutContainer,
	LayoutMainColumn,
	LayoutHeading
} from "../components/globals/layout/Layout"


const Home = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutMainColumn>
        <LayoutHeading text="Component Library" />
        <img src="https://i.giphy.com/bUkXxGkGYb5bq.webp" className="block w-full" />
      </LayoutMainColumn>
    </LayoutContainer>
  );
};

export default Home;
