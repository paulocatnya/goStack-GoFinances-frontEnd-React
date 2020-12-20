import React from 'react';

import { Container } from './styles';

interface TooltipPrps {
  title:string;
  className?:string;
}
const Tooltip: React.FC<TooltipPrps> = ( {title,className,children} ) => {

  return (
    <Container className={className}>
    {children}
      <span>{title}</span>
    </Container>
    )
}

export default Tooltip;
