import React from "react";
import { LoadingContainer } from "./styles";
import Skeleton from "@material-ui/lab/Skeleton";

const SkeletonList = () => {
  return (
    <>
      <LoadingContainer>
        <Skeleton />
      </LoadingContainer>
      <LoadingContainer>
        <Skeleton />
      </LoadingContainer>
      <LoadingContainer>
        <Skeleton />
      </LoadingContainer>
      <LoadingContainer>
        <Skeleton />
      </LoadingContainer>
      <LoadingContainer>
        <Skeleton />
      </LoadingContainer>
      <LoadingContainer>
        <Skeleton />
      </LoadingContainer>
    </>
  );
};

export default SkeletonList;
