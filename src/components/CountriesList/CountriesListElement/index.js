import React from "react";
import {
  ElementContainer,
  CountryElementContainer,
  ValuesContainer,
  ValuesElementContainer,
  Image,
} from "./styles";

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

export default CountriesListElement;
