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
  font-size: 1.25rem;
  overflow: hidden;
`;

function Present({ left, operator, right, error }) {
  return (
    <PresentBlock>
      {error && error}
      {!error &&
        `${left}${operator === "" ? "" : ` ${operator}`}${
          right === "" ? "" : ` ${right}`
        }`}
    </PresentBlock>
  );
}

export default Present;
