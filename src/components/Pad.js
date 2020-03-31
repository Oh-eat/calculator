import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Number from "./Number";

const PadBlock = styled.div`
  width: 15rem;
  height: calc(15rem * 1.25);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "plus minus multiple divide"
    "number number number back"
    "number number number clear"
    "number number number equal"
    "number number number equal";
  align-items: center;
  justify-items: center;
`;

function Pad() {
  return (
    <PadBlock>
      <Button text="+" area="plus" />
      <Button text="-" area="minus" />
      <Button text="×" area="multiple" />
      <Button text="%" area="divide" />
      <Number area="number" />
      <Button text="←" area="back" />
      <Button text="C" area="clear" />
      <Button text="=" area="equal" />
    </PadBlock>
  );
}

export default Pad;
