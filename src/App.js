import React from "react";
import styled from "styled-components";
import Display from "./components/Display";
import Pad from "./components/Pad";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Wrapper>
      <Display />
      <Pad />
    </Wrapper>
  );
}

export default App;
