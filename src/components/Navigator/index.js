import React, { useState } from "react";
import {
  Container,
  ButtonContainer,
  Button,
  LineContainer,
  Line,
} from "./styles";

import PropTypes from "prop-types";

const Navigator = ({ onButtonClicked, dataType, navigatorObject }) => {
  const [linePosition, setLinePosition] = useState(
    navigatorObject[dataType].linePosition
  );

  const onClickedHandler = (dataType) => {
    onButtonClicked(dataType);
    setLinePosition(navigatorObject[dataType].linePosition);
  };

  const isSelected = (dataType) => {
    return linePosition === navigatorObject[dataType].linePosition;
  };

  const buttons = Object.keys(navigatorObject).map((key) => (
    <Button
      key={key}
      selected={() => isSelected(key)}
      onClick={() => onClickedHandler(key)}
    >
      {navigatorObject[key].label}
    </Button>
  ));

  return (
    <Container color={navigatorObject[dataType].backgroundButtonColor}>
      <ButtonContainer>{buttons}</ButtonContainer>
      <LineContainer linePosition={linePosition}>
        <Line />
      </LineContainer>
    </Container>
  );
};

Navigator.propTypes = {
  onButtonClicked: PropTypes.func.isRequired,
  dataType: PropTypes.string.isRequired,
  navigatorObject: PropTypes.shape({
    linePosition: PropTypes.string,
    label: PropTypes.string,
    backgroundButtonColor: PropTypes.string,
  })
}

export default Navigator;
