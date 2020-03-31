import React from "react";
import styled from "styled-components";
import Button from "./Button";

const NumberBlock = styled.div`
  grid-area: ${props => props.area};
  width: calc(15rem / 4 * 3);
  height: calc(15rem / 4 * 5 / 5 * 4);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
`;

function Number({ area, handleNumberClick, handleDotClick }) {
  return (
    <NumberBlock area={area}>
      {[7, 8, 9, 4, 5, 6, 1, 2, 3]
        .map(number => `${number}`)
        .map(number => (
          <Button
            key={number}
            text={number}
            onClick={() => handleNumberClick(number)}
          />
        ))}
      <Button text="0" area="4/1/4/3" onClick={() => handleNumberClick(0)} />
      <Button text="." onClick={handleDotClick} />
    </NumberBlock>
  );
}

export default Number;
