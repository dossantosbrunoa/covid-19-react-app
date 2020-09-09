import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 4px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 1px #C1C5C8;
    line-height: 24px;
    padding: 8px 15px;
    @media (min-width: 768px) {
        padding: 8px 20px;
    }
`;

export const HeaderLabel = styled.div`
    line-heigth: 24px;
    font-weight: ${props => props.selected ? '800' : '400'};
    :hover {
        font-weight: 800;
    }
`;

export const CountryHeaderContainer = styled.div`
    width: 30%;
`;

export const ValuesHeaderContainer = styled.div`
    width: ${props => props.width};
    cursor: pointer;
    justify-content: flex-end;
    display: flex;
`;

export const ValuesContainer = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
`;

export const ElementsContainer = styled.div`
    overflow: auto;
    height: 200px;
`;