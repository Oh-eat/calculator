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

function Pad({
  handleNumberClick,
  handleDotClick,
  handleOperatorClick,
  handleBackClick,
  handleClearClick,
  handleCalculateClick
}) {
  return (
    <PadBlock>
      <Button text="+" area="plus" onClick={() => handleOperatorClick("+")} />
      <Button text="-" area="minus" onClick={() => handleOperatorClick("-")} />
      <Button
        text="*"
        area="multiple"
        onClick={() => handleOperatorClick("*")}
      />
      <Button text="/" area="divide" onClick={() => handleOperatorClick("/")} />
      <Number
        area="number"
        handleNumberClick={handleNumberClick}
        handleDotClick={handleDotClick}
      />
      <Button text="←" area="back" onClick={handleBackClick} />
      <Button text="C" area="clear" onClick={handleClearClick} />
      <Button text="=" area="equal" onClick={handleCalculateClick} />
    </PadBlock>
  );
}

export default Pad;
