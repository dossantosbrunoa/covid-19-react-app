import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { useMedia } from 'react-media';

import {
  ComposableMap,
  Sphere,
  Graticule,
  ZoomableGroup,
} from "react-simple-maps";

import MapNavigator from './MapNavigator';
import ZoomIcon from '../Atoms/ZoomIcon';

import { Container, SliderContainer, Description, LoadingContainer, ComposableMapContainer } from './styles';
import Slider from '@material-ui/core/Slider';
import CircularProgress from '@material-ui/core/CircularProgress';
import Globe from './Globe';
import ReactTooltip from "react-tooltip";

const mapObject = {
  totalDeaths: {
    lowerLimit: "#ffe5e5",
    upperLimit: "#ff0000",
    defaultPerHabitantValue: 200000,
    minValuePerHabitant: 100000,
    maxValuePerHabitant: 300000,
    backgroundButtonColor: "#ff0000",
  },
  totalCases: {
    lowerLimit: "#f0e5f0",
    upperLimit: "#6a006a",
    defaultPerHabitantValue: 5000,
    minValuePerHabitant: 3000,
    maxValuePerHabitant: 7000,
    backgroundButtonColor: "#6a006a",
  },
  totalRecovered: {
    lowerLimit: "#e5f2e5",
    upperLimit: "#008000",
    defaultPerHabitantValue: 8000,
    minValuePerHabitant: 4000,
    maxValuePerHabitant: 12000,
    backgroundButtonColor: "#008000",
  }
}

const zoomStep = 0.2;

const WorldMap = ({ defaultDataType }) => {
  const [tooltipContent, setTooltipContent] = useState(null);
  const [dataType, setDataTypeState] = useState(defaultDataType);
  const [numberPerHabitants, setNumberPerHabitants] = useState(mapObject[defaultDataType].defaultPerHabitantValue);
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  const isBigScreen = useMedia({ query: "(min-width: 768px)" });

  const { summaryList, loading } = useSelector((state) => state.covid);
  const onDataTypeChange = (dataType) => {
    setDataTypeState(dataType);
    setNumberPerHabitants(mapObject[dataType].defaultPerHabitantValue);
  }

  const onSliderChange = (event, newValue) => {
    setNumberPerHabitants(newValue);
  };

  const onZoomInHandler = () => {
    if(position.zoom <= 2) {
      setPosition((prevPosition) => ({ ...prevPosition, zoom: prevPosition.zoom + zoomStep}));
    }
  }

  const onZoomOutHandler = () => {
    if(position.zoom >= 1) {
      setPosition((prevPosition) => ({ ...prevPosition, zoom: prevPosition.zoom - zoomStep}));
    }
  }

  function onMoveEndHandler(position) {
    setPosition(position);
  }

  return (
    <Container>
      <MapNavigator 
        color={mapObject[dataType].backgroundButtonColor}
        onButtonClicked={(dataType) => onDataTypeChange(dataType)}
        defaultDataType={defaultDataType}
        />
        {loading ? 
        <LoadingContainer>
          <CircularProgress /> 
        </LoadingContainer> : 
          <>
            <Description>Dados para cada {numberPerHabitants.toLocaleString('pt-Br')} Habitantes</Description>
            <SliderContainer>
              <Slider 
                style={{color: mapObject[dataType].backgroundButtonColor}}
                min={mapObject[dataType].minValuePerHabitant}
                max={mapObject[dataType].maxValuePerHabitant}
                value={numberPerHabitants} 
                onChange={onSliderChange} 
                aria-labelledby="continuous-slider" />
            </SliderContainer>
            <ComposableMapContainer>
            <ComposableMap
                data-tip=""
                height={200}
                width={isBigScreen ? 500 : 400}
                projectionConfig={{
                  scale: 80
                }}
              >
                <ZoomableGroup 
                  zoom={position.zoom}
                  center={position.coordinates}
                  onMoveEnd={onMoveEndHandler}>
                <Sphere stroke="#C1C5C8" strokeWidth={0.5} />
                <Graticule stroke="#C1C5C8" strokeWidth={0.5} />
                <Globe 
                  colorScaleLowerLimit={mapObject[dataType].lowerLimit}
                  colorScaleUpperLimit={mapObject[dataType].upperLimit}
                  summaryList={summaryList} 
                  numberPerHabitants={numberPerHabitants}
                  dataType={dataType} 
                  countryHoverColor={mapObject[dataType].backgroundButtonColor}
                  onMouseEnter={(tooltipContent) => {
                    setTooltipContent(tooltipContent);
                  }}
                  onMouseLeave={(tooltipContent) => {
                    setTooltipContent(tooltipContent);
                  }} />
                </ZoomableGroup>
            </ComposableMap>
            </ComposableMapContainer>
            <ReactTooltip>{tooltipContent}</ReactTooltip> 
            <ZoomIcon 
             onZoomIn={() =>  onZoomInHandler()}
             onZoomOut={() => onZoomOutHandler()} />
          </>}
    </Container>
  );
};

export default WorldMap;
