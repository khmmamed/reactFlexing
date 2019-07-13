import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  flex-flow: ${props => (props.flow ? props.flow : "")};
  flex-direction: ${props => (props.row ? "row" : "column")};
  flex-wrap: ${props => (props.wrap ? "wrap" : "nowrap")};
  justify-content: flex-start;
  align-items: center;
  align-content: space-between;
  /*
    justify-content
    align-items
    align-content
  */
`;

export const Flex = ({ children, row, flow, wrap, ...props }) => (
  <BoxContainer
    row={row}
    flow={flow}
    wrap={wrap}
    {...props}
  >
    {children}
  </BoxContainer>
);
