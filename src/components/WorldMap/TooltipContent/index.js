import React from 'react';

import { Container, Image } from './styles'; 

const TooltipContent = ({ flag, name, value }) => {
    return (
    <Container>
        <Image src={flag} alt=""/>
        <div>{name} {value.toFixed(2)}</div>
    </Container>)
}

export default TooltipContent;