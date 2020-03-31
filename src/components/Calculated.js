import React from "react";
import styled from "styled-components";

const CalculatedBlock = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: calc(35%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Calculated(props) {
  return <CalculatedBlock>계산된 값</CalculatedBlock>;
}

export default Calculated;
