import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "glamor";

const NavItem = ({ to, children }) => {
  const navLinkStyle = css({
    fontSize: "18px",
    color: "white",
    textDecoration: "none",
    ":hover": {
      fontWeight: "800",
    },
  });

  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <NavLink className={navLinkStyle} activeStyle={activeStyle} to={to}>
      {children}
    </NavLink>
  );
};

export default NavItem;
