import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

import {
  Container,
  HeaderContainer,
  CountryHeaderContainer,
  ValuesContainer,
  ValuesHeaderContainer,
  ElementsContainer,
  HeaderLabel,
} from "./styles";

import CountriesListElement from "./CountriesListElement";
import SkeletonList from "./SkeletonList";
import TotalElement from "./TotalElement";

import { sortByProperty } from "../../util/listUtil";
import OrderListIcon from "../Atoms/OrderListIcon";

const CountriesList = () => {
  const dispatch = useDispatch();
  const { summaryList, global, loading } = useSelector((state) => state.covid);
  const [sortObject, setSortObject] = useState({
    totalCases: "desc",
    totalDeaths: null,
  });

  let elements = null;

  if (loading) {
    elements = <SkeletonList />;
  } else if (!!summaryList && summaryList.length > 0) {
    elements = summaryList.map((summary, index) => (
      <CountriesListElement
        key={index}
        name={summary.name}
        totalCases={summary.totalCases}
        totalDeaths={summary.totalDeaths}
        flag={summary.flag}
      />
    ));
  }

  const onSortHandler = (property) => {
    const newOrder = sortObject[property] === "desc" ? "asc" : "desc";
    const newSummaryList = sortByProperty(summaryList, property, newOrder);
    dispatch(actions.updateSummaryList(newSummaryList));
    const emptySortObject = {
      totalCases: null,
      totalDeaths: null,
    };
    const newSortObject = {
      ...emptySortObject,
      [property]: newOrder,
    };
    setSortObject(newSortObject);
  };

  const isActive = (dataType) => {
    return sortObject[dataType] !== null;
  };

  return (
    <Container>
      <HeaderContainer>
        <CountryHeaderContainer>País</CountryHeaderContainer>
        <ValuesContainer>
          <ValuesHeaderContainer
            width="20%"
            onClick={() => onSortHandler("totalCases")}
          >
            <OrderListIcon order={sortObject.totalCases} />
            <HeaderLabel selected={isActive("totalCases")}>Casos</HeaderLabel>
          </ValuesHeaderContainer>
          <ValuesHeaderContainer
            width="20%"
            onClick={() => onSortHandler("totalDeaths")}
          >
            <OrderListIcon order={sortObject.totalDeaths} />
            <HeaderLabel selected={isActive("totalDeaths")}>Mortes</HeaderLabel>
          </ValuesHeaderContainer>
        </ValuesContainer>
      </HeaderContainer>
      <ElementsContainer>{elements}</ElementsContainer>
      <TotalElement
        loading={loading}
        totalCases={global ? global.totalCases : 0}
        totalDeaths={global ? global.totalDeaths : 0}
      />
    </Container>
  );
};

export default CountriesList;
