import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Container, LabelContainer, FieldsContainer, FieldContainer } from "./styles";

import PropTypes from "prop-types";

const TotalElement = ({ loading, totalCases, totalDeaths }) => {
  let totalElement = null;

  if (loading) {
    totalElement = <Skeleton style={{ width: "100%" }} />;
  } else {
    totalElement = (
      <>
        <LabelContainer>TOTAL</LabelContainer>
        <FieldsContainer>
          <FieldContainer width={"20%"}>
            {totalCases.toLocaleString("pt-Br")}
          </FieldContainer>
          <FieldContainer width={"20%"}>
            {totalDeaths.toLocaleString("pt-Br")}
          </FieldContainer>
        </FieldsContainer>
      </>
    );
  }

  return <Container>{totalElement}</Container>;
};

TotalElement.propTypes = {
  loading: PropTypes.bool.isRequired,
  totalCases: PropTypes.number.isRequired,
  totalDeaths: PropTypes.number.isRequired,
}

export default TotalElement;
