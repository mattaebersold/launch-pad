
import React from "react";
import { NavLink } from "react-router-dom";

const LaunchPadNavLink = ({to, label}) => {
  return (
		<NavLink to={to} className={({ isActive }) => (isActive ? 'underline' : '')}>
			<span>{ label }</span>
		</NavLink>
  );
};

export default LaunchPadNavLink;
