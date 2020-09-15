import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 20px;
  font-weight: 800;
  line-height: 20px;
  padding: 8px 21px 8px 15px;
  border-top: 1px solid #c1c5c8;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 8px 26px 8px 20px;
  }
`;

export const LabelContainer = styled.div`
  width: 30%;
`;

export const FieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const FieldContainer = styled.div`
  width: ${props => props.width}; 
  text-align: right;
`;
