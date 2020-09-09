import styled from 'styled-components';

export const ElementContainer = styled.div`
    display: flex;
    height: 20px;
    line-height: 20px;
    padding: 8px 15px;
    box-shadow: 0px 1px #C1C5C8;
    justify-content: space-between;
    @media (min-width: 768px) {
        padding: 8px 20px;
    }
`;

export const CountryElementContainer = styled.div`
    width: 30%;
`;

export const ValuesContainer = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
`;

export const ValuesElementContainer = styled.div`
    width: ${props => props.width};
    text-align: right;
`;

export const Image = styled.img`
    width: 0;
    @media (min-width: 768px) {
        width: 20px;
        margin-right: 4px;
    }
`;