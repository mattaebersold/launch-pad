import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-5">
      <div className="header-container bg-black text-white">
        <ul className="flex items-center justify-center p-3">
          <li className="mx-3">
            <Link to="/">
              <span>Home</span>
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
