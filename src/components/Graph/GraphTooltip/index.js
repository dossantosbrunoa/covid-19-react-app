import React from "react";
import { Container, TextContainer, Strong } from "./styles";

import PropTypes from "prop-types";

const GraphTooltip = ({ active, payload, label, dataType }) => {
  const getTitle = (dataType) => {
    switch (dataType) {
      case "cases":
        return "Número de casos";
      case "deaths":
        return "Número de mortes";
      default:
        return "";
    }
  };

  if (active) {
    return (
      <Container>
        <TextContainer>
          <Strong>{getTitle(dataType)}:</Strong>
          {payload[0].value.toLocaleString("pt-Br")}
        </TextContainer>
        <TextContainer>
          <Strong>Data:</Strong>
          {label}
        </TextContainer>
      </Container>
    );
  }

  return null;
};

GraphTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  dataType: PropTypes.string.isRequired,
}

export default GraphTooltip;
