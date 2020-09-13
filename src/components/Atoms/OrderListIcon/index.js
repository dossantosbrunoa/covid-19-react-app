import React from "react";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const OrderListIcon = ({ order }) => {
  let orderListIcon = null;

  if (order === "asc") {
    orderListIcon = <ArrowDropUpIcon />;
  } else if (order === "desc") {
    orderListIcon = <ArrowDropDownIcon />;
  }

  return orderListIcon;
};

export default OrderListIcon;
