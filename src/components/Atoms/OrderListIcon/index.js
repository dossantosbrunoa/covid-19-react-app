import React from "react";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import PropTypes from "prop-types";

const OrderListIcon = ({ order }) => {
  let orderListIcon = null;

  if (order === "asc") {
    orderListIcon = <ArrowDropUpIcon />;
  } else if (order === "desc") {
    orderListIcon = <ArrowDropDownIcon />;
  }

  return orderListIcon;
};

OrderListIcon.propTypes = {
  order: PropTypes.oneOf(['asc', 'desc'])
}

export default OrderListIcon;
