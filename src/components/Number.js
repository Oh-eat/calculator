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

function Number({ area }) {
  return (
    <NumberBlock area={area}>
      <Button text="7" />
      <Button text="8" />
      <Button text="9" />
      <Button text="4" />
      <Button text="5" />
      <Button text="6" />
      <Button text="1" />
      <Button text="2" />
      <Button text="3" />
      <Button text="0" area="4/1/4/4" />
    </NumberBlock>
  );
}

export default Number;
