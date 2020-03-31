import React from "react";
import styled from "styled-components";

const ButtonBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Button({ text, onClick }) {
  return <ButtonBlock>{text}</ButtonBlock>;
}

export default Button;
