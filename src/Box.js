import React from "react";
import styled from "styled-components";

const StyledElement = styled.div`
  flex: ${props => props.flex};
  flex-grow: ${props => props.grow};
  flex-shrink: ${props => props.shrink};
  flex-basis: ${props => props.basis};
  order: ${props => props.order};
  align-self: ${props => props.self};
`;

export const Box = ({children, grow, shrink, basis, order, flex, self, ...props}) => (
  <StyledElement
    grow={grow}
    shrink={shrink}
    basis={basis}
    order={order}
    flex={flex}
    self={self}
    {...props}
  >
    {children}
  </StyledElement>
);
