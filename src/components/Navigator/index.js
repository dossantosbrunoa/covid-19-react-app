import React, { useState } from 'react';
import { Container, ButtonContainer, Button, LineContainer, Line } from './styles';

const Navigator = ({ onButtonClicked, dataType, navigatorObject }) => {
  const [linePosition, setLinePosition] = useState(navigatorObject[dataType].linePosition);

  const onClickedHandler = (dataType) => {
    onButtonClicked(dataType);
    setLinePosition(navigatorObject[dataType].linePosition);
  }

  const isSelected = (dataType) => {
    return linePosition === navigatorObject[dataType].linePosition;
  }

  const buttons = Object.keys(navigatorObject).map(key => (
    <Button 
      selected={() => isSelected(key)} 
      onClick={() => onClickedHandler(key)}>
        {navigatorObject[key].label}
    </Button>
  ));

  return (
      <Container color={navigatorObject[dataType].backgroundButtonColor}>
        <ButtonContainer>
          {buttons}
        </ButtonContainer>
        <LineContainer linePosition={linePosition}>
          <Line/>
        </LineContainer>
      </Container>
  );
};

export default Navigator;