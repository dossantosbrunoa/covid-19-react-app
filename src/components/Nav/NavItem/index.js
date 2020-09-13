import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "glamor";

import PropTypes from "prop-types";

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

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavItem;
