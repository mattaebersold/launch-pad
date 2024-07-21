import React from "react";
import { Link } from "react-router-dom";
import GoodnessImage from "../../assets/images/logo.png"

const Header = () => {
  return (
    <header className="mb-5">
      <div className="header-container bg-primary text-black">
        <ul className="flex items-center justify-start py-6 w-11/12 mx-auto">
          <li className="mx-3 font-bold">
            <Link to="/" className="flex items-center">
              <img className="block mr-4 h-[50px] w-auto" src={GoodnessImage} alt="goodness" />
              <span>Launch Pad</span>
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/demos">
              <span>Demos</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
