import React from "react";
import styled from "styled-components";

const PresentBlock = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: calc(65%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.75rem;
`;

function Present(props) {
  return <PresentBlock>계산될 값</PresentBlock>;
}

export default Present;
