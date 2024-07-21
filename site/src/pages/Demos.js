import React from "react";
import Sidebar from "../components/sidebar/Sidebar"

const Demos = () => {
  return (
    <div className="flex items-start w-11/12 mx-auto py-12">
      <Sidebar />
      <div className="grow relative">
        <h1 className="text-3xl font-bold">Demos</h1>
      </div>
    </div>
  );
};

export default Demos;
