import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.color};
    padding: 12px;
    transition: background 0.4s;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
`;

export const Button = styled.div`
    cursor: pointer;
    width: 30%;
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
    font-weight: ${props => props.selected ? '800' : '400'};
    :hover {
        font-weight: 800;
    }
`;

export const LineContainer = styled.div`
    display: flex;
    justify-content: ${props => props.linePosition};
    width: 100%;
    margin: 10px 0 0 0;
`;

export const Line = styled.hr`
    margin: 0;
    width: 30%;
    height: 2px;
    background: white;
    border-radius: 2px;
`