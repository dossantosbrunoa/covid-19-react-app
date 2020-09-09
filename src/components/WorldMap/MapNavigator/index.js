import React, { useState } from 'react';
import { Container, ButtonContainer, Button, LineContainer, Line } from './styles';

const mapNavigatorObject = {
  totalCases: {
    linePosition: 'start'
  },
  totalDeaths: {
    linePosition: 'center'
  },
  totalRecovered: {
    linePosition: 'flex-end'
  }
}

const MapNavigator = ({ onButtonClicked, color, defaultDataType }) => {
  const [linePosition, setLinePosition] = useState(mapNavigatorObject[defaultDataType].linePosition);

  const onClickedHandler = (dataType) => {
    onButtonClicked(dataType);
    setLinePosition(mapNavigatorObject[dataType].linePosition);
  }

  const isSelected = (dataType) => {
    return linePosition === mapNavigatorObject[dataType].linePosition;
  }

  return (
      <Container color={color}>
        <ButtonContainer>
          <Button selected={isSelected('totalCases')} onClick={() => onClickedHandler('totalCases')}>Total de Casos</Button>
          <Button selected={isSelected('totalDeaths')} onClick={() => onClickedHandler('totalDeaths')}>Total de Mortes</Button>
          <Button selected={isSelected('totalRecovered')} onClick={() => onClickedHandler('totalRecovered')}>Total de Recuperados</Button>
        </ButtonContainer>
        <LineContainer linePosition={linePosition}>
          <Line/>
        </LineContainer>
      </Container>
  );
};

export default MapNavigator;