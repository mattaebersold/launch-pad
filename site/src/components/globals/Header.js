import React from "react";
import { Link } from "react-router-dom";
import LaunchPadNavLink from "./LaunchPadNavLink"
import { FaGithub, FaRocket } from "react-icons/fa";

const Header = () => {
  return (
    <header className="mb-5 bg-black/50 border-b-2 border-b-black">
      <div className="flex items-center justify-between py-6 w-11/12 max-w-[1400px] mx-auto">

        <Link to="/" className="flex items-center font-bold">
          <FaRocket className="text-2xl mr-3" />
          <span>Launch Pad Component Library</span>
        </Link>

        <ul className="flex items-center">
          <li className="mx-3">
            <LaunchPadNavLink to="/to-do" label="Upcoming" />
          </li>

          <li className="mx-3">
            <LaunchPadNavLink to="/demos" label="Demos" />
          </li>
          <li className="mx-3 text-3xl">
            <Link to="https://github.com/mattaebersold/launch-pad">
              <FaGithub />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
