import React from "react";
import {
  ElementContainer,
  CountryElementContainer,
  ValuesContainer,
  ValuesElementContainer,
  Image,
} from "./styles";

import PropTypes from "prop-types";

const CountriesListElement = ({
  name,
  totalCases,
  totalDeaths,
  totalRecovered,
  flag,
}) => {
  return (
    <ElementContainer>
      <CountryElementContainer>
        <Image src={flag} alt="" />
        {name}
      </CountryElementContainer>
      <ValuesContainer>
        <ValuesElementContainer width="20%">
          {totalCases.toLocaleString("pt-Br")}
        </ValuesElementContainer>
        <ValuesElementContainer width="20%">
          {totalDeaths.toLocaleString("pt-Br")}
        </ValuesElementContainer>
        <ValuesElementContainer width="30%">
          {totalRecovered.toLocaleString("pt-Br")}
        </ValuesElementContainer>
      </ValuesContainer>
    </ElementContainer>
  );
};

CountriesListElement.propTypes = {
  name: PropTypes.string.isRequired,
  totalCases: PropTypes.number.isRequired,
  totalDeaths: PropTypes.number.isRequired,
  totalRecovered: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
}

export default CountriesListElement;
