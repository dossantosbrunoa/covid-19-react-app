import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

export const SliderContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export const Description = styled.p`
  text-align: center;
  margin: 10px 0;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  @media (min-width: 768px) {
    height: 310px;
  }
`;

export const ComposableMapContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  @media (min-width: 768px) {
    height: 420px;
  }
`;
