import React from "react";
import { scaleLinear } from "d3-scale";

import { Geographies, Geography } from "react-simple-maps";
import TooltipContent from "../TooltipContent";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Globe = ({
  colorScaleLowerLimit,
  colorScaleUpperLimit,
  summaryList,
  numberPerHabitants,
  dataType,
  countryHoverColor,
  onMouseEnter,
  onMouseLeave,
}) => {
  const colorScale = scaleLinear()
    .domain([0, 100])
    .range([colorScaleLowerLimit, colorScaleUpperLimit]);

  const getCovidData = (geo) => {
    const summaryListElement = summaryList.find(
      (c) => c.alpha2Code === geo.properties.ISO_A2
    );
    return {
      value: summaryListElement
        ? (numberPerHabitants * summaryListElement[dataType]) /
          summaryListElement.population
        : 0,
      name: summaryListElement ? summaryListElement.name : "",
      flag: summaryListElement ? summaryListElement.flag : null,
    };
  };

  const getTooltipContent = (covidData) => {
    return <TooltipContent {...covidData} />;
  };

  let globe = null;

  if (!!summaryList && summaryList.length > 0) {
    globe = (
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const covidData = getCovidData(geo);
            const geographyStyle = {
              default: {
                fill: colorScale(covidData.value),
                transition: "fill 0.4s",
                outline: "none",
              },
              hover: {
                fill: countryHoverColor,
                outline: "none",
              },
              pressed: {
                fill: countryHoverColor,
                outline: "none",
              },
            };
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={geographyStyle}
                onMouseEnter={() => onMouseEnter(getTooltipContent(covidData))}
                onMouseLeave={() => onMouseLeave(null)}
              />
            );
          })
        }
      </Geographies>
    );
  }

  return globe;
};

export default Globe;
