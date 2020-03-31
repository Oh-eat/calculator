import React from "react";
import styled from "styled-components";
import Button from "./Button";

const PadBlock = styled.div`
  width: 15rem;
  height: 15rem;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
`;

function Pad() {
  return (
    <PadBlock>
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
      <Button text="test" />
    </PadBlock>
  );
}

export default Pad;
