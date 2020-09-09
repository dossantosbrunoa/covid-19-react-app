import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 20px;
    font-weight: 800;
    line-height: 20px;
    padding: 8px 21px 8px 15px;
    border-top: 1px solid #C1C5C8;
    justify-content: space-between;
    @media (min-width: 768px) {
        padding: 8px 26px 8px 20px;
    }
`;