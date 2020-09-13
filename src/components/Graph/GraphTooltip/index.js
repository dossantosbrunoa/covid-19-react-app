import React from "react";
import { Container, TextContainer, Strong } from "./styles";

import PropTypes from "prop-types";

const GraphTooltip = ({ active, payload, label }) => {
  const getTitle = (dataKey) => {
    switch (dataKey) {
      case "cases":
        return "Número de casos";
      case "deaths":
        return "Número de mortes";
      case "recovered":
        return "Número de recuperados";
      default:
        return "";
    }
  };

  if (active) {
    return (
      <Container>
        <TextContainer>
          <Strong>{getTitle(payload[0].dataKey)}:</Strong>
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
}

export default GraphTooltip;
