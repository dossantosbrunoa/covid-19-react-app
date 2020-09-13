import React from 'react';

import { Container, Image } from './styles'; 

const TooltipContent = ({ flag, name, value }) => {
    let content = [
        <Image src={flag} alt=""/>,
        <div>{name} {value.toFixed(2)}</div>
    ];

    if(!flag) {
        content = <div>Dados não encontrados</div>
    }
    
    return (
    <Container>
        {content}
    </Container>)
}

export default TooltipContent;