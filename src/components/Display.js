import React from "react";
import styled from "styled-components";
import Present from "./Present";
import Calculated from "./Calculated";

const DisplayBlock = styled.div`
  width: 15rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(110, 110, 110);
  color: white;
`;

function Display({ state }) {
  const { left, operator, right, calculated, error } = state;
  return (
    <DisplayBlock>
      <Present left={left} operator={operator} right={right} error={error} />
      <Calculated calculated={calculated} error={error} />
    </DisplayBlock>
  );
}

export default Display;
