
import React from "react";
import { NavLink } from "react-router-dom";

const LaunchPadNavLink = ({to, label}) => {
  return (
		<NavLink to={to} className={({ isActive }) => (isActive ? 'underline font-bold text-red' : '')}>
			<span>{ label }</span>
		</NavLink>
  );
};

export default LaunchPadNavLink;
