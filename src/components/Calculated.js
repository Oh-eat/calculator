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

function Calculated({ calculated, error }) {
  return <CalculatedBlock>{!error && calculated}</CalculatedBlock>;
}

export default Calculated;
