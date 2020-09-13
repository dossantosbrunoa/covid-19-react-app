import React from "react";
import { Container, PageTitle } from "./styles";

import PropTypes from "prop-types";

const PageWrapper = ({ pageTitle, children }) => {
  return (
    <Container>
      <PageTitle>{pageTitle}</PageTitle>
      {children}
    </Container>
  );
};

PageWrapper.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default PageWrapper;
