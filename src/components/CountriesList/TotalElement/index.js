import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Container } from "./styles";

const TotalElement = ({ loading, totalCases, totalDeaths, totalRecovered }) => {
  let totalElement = null;

  if (loading) {
    totalElement = <Skeleton style={{ width: "100%" }} />;
  } else {
    totalElement = (
      <>
        <div style={{ width: "30%" }}>TOTAL</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <div style={{ width: "20%", textAlign: "right" }}>
            {totalCases.toLocaleString("pt-Br")}
          </div>
          <div style={{ width: "20%", textAlign: "right" }}>
            {totalDeaths.toLocaleString("pt-Br")}
          </div>
          <div style={{ width: "30%", textAlign: "right" }}>
            {totalRecovered.toLocaleString("pt-Br")}
          </div>
        </div>
      </>
    );
  }

  return <Container>{totalElement}</Container>;
};

export default TotalElement;
