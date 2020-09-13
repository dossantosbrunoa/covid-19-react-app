import React from "react";

import { Container, Image } from "./styles";
import PropTypes from "prop-types";

const TooltipContent = ({ flag, name, value }) => {
  let content = [
    <Image src={flag} alt="" />,
    <div>
      {name} {value.toFixed(2)}
    </div>,
  ];

  if (!flag) {
    content = <div>Dados não encontrados</div>;
  }

  return <Container>{content}</Container>;
};

TooltipContent.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
}

export default TooltipContent;
