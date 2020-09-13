import React from "react";

import { Container, IconContainer } from "./styles";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import PropTypes from "prop-types";

const ZoomIcon = ({ onZoomIn, onZoomOut }) => {
  return (
    <Container>
      <IconContainer>
        <AddIcon style={{ width: "18px", height: "18px" }} onClick={onZoomIn} />
      </IconContainer>
      <IconContainer>
        <RemoveIcon
          style={{ width: "18px", height: "18px" }}
          onClick={onZoomOut}
        />
      </IconContainer>
    </Container>
  );
};

ZoomIcon.propTypes = {
  onZoomIn: PropTypes.func.isRequired,
  onZoomOut: PropTypes.func.isRequired,
};

export default ZoomIcon;
