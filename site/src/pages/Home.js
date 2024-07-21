import React from "react";
import Sidebar from "../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex items-start w-11/12 max-w-[1400px] mx-auto py-12">
      <Sidebar />
      <div className="grow relative">
        <h1 className="text-3xl font-bold">Goodness Component Library</h1>
      </div>
    </div>
  );
};

export default Home;
