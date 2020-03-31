import React from "react";
import styled from "styled-components";
import Display from "./components/Display";
import Pad from "./components/Pad";
import useHook from "./components/hooks/useHook";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [
    state,
    handleNumberClick,
    handleDotClick,
    handleOperatorClick,
    handleBackClick,
    handleClearClick,
    handleCalculateClick
  ] = useHook();

  return (
    <Wrapper>
      <Display state={state} />
      <Pad
        handleNumberClick={handleNumberClick}
        handleDotClick={handleDotClick}
        handleOperatorClick={handleOperatorClick}
        handleBackClick={handleBackClick}
        handleClearClick={handleClearClick}
        handleCalculateClick={handleCalculateClick}
      />
    </Wrapper>
  );
}

export default App;
