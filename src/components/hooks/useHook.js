import { useReducer, useCallback } from "react";
import {
  reducer,
  initialState,
  addNumber,
  setOperator,
  backspace,
  initialize,
  calculate
} from "../../reducers";

export default function useHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = useCallback(
    number => dispatch(addNumber(number)),
    []
  );
  const handleOperatorClick = useCallback(
    operator => dispatch(setOperator(operator)),
    []
  );
  const handleBackClick = useCallback(() => dispatch(backspace()), []);
  const handleClearClick = useCallback(() => dispatch(initialize()), []);
  const handleCalculateClick = useCallback(() => dispatch(calculate()), []);
  return [
    state,
    handleNumberClick,
    handleOperatorClick,
    handleBackClick,
    handleClearClick,
    handleCalculateClick
  ];
}
