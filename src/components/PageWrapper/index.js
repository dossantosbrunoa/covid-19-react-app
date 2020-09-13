import React from "react";
import { Container, PageTitle } from "./styles";

const PageWrapper = ({ pageTitle, children }) => {
  return (
    <Container>
      <PageTitle>{pageTitle}</PageTitle>
      {children}
    </Container>
  );
};

export default PageWrapper;
