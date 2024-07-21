import React from "react";
import { Link } from "react-router-dom";
import GoodnessImage from "../../assets/images/logo.png"
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="mb-5">
      <div className="flex items-center justify-between py-6 w-11/12 mx-auto">

        <Link to="/" className="flex items-center font-bold">
          <img className="block mr-4 h-[50px] w-auto" src={GoodnessImage} alt="goodness" />
          <span>Launch Pad</span>
        </Link>

        <ul className="flex items-center">
          <li className="mx-3">
            <Link to="/demos">
              <span>Demos</span>
            </Link>
          </li>
          <li className="mx-3">
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
