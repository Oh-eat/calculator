import React from "react";
import styled from "styled-components";
import Present from "./Present";
import Calculated from "./Calculated";

const DisplayBlock = styled.div`
  width: 15rem;
  height: 5rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Display() {
  return (
    <DisplayBlock>
      <Present />
      <Calculated />
    </DisplayBlock>
  );
}

export default Display;
