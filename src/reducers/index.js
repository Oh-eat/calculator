import adjustNumber from "../lib/adjustNumber";

const ADD_NUMBER = "ADD_NUMBER";
const ADD_DOT = "ADD_DOT";
const SET_OPERATOR = "SET_OPERATOR";
const BACKSPACE = "BACKSPACE";
const CALCULATE = "CALCULATE";
const INITIALIZE = "INITIALIZE";

export const addNumber = number => ({ type: ADD_NUMBER, number });
export const addDot = () => ({ type: ADD_DOT });
export const setOperator = operator => ({ type: SET_OPERATOR, operator });
export const backspace = () => ({ type: BACKSPACE });
export const calculate = () => ({ type: CALCULATE });
export const initialize = () => ({ type: INITIALIZE });

export const initialState = {
  left: "0",
  operator: "",
  right: "",
  calculated: null,
  error: null
};

export function reducer(state, action) {
  switch (action.type) {
    case ADD_NUMBER:
      const targetA = state.operator === "" ? "left" : "right";
      const parsed = parseFloat(state[targetA]);
      const parsedNew = parseFloat(state[targetA] + action.number);
      const nextTargetA =
        parsed !== parsedNew
          ? parsedNew
          : state[targetA].includes(".")
          ? state[targetA] + action.number
          : parsed;
      return { ...state, [targetA]: nextTargetA.toString(), error: null };

    case ADD_DOT:
      const targetB = state.operator === "" ? "left" : "right";
      const nextTargetB = state[targetB].includes(".")
        ? state[targetB]
        : state[targetB] === ""
        ? "0."
        : state[targetB] + ".";
      return { ...state, [targetB]: nextTargetB };

    case SET_OPERATOR:
      return state.left === ""
        ? state
        : { ...state, operator: action.operator };

    case BACKSPACE:
      const targetC =
        state.right !== ""
          ? "right"
          : state.operator !== ""
          ? "operator"
          : "left";
      const value = state[targetC];
      const nextValue = value.slice(0, value.length - 1);
      return { ...state, [targetC]: nextValue };

    case CALCULATE:
      const { left, operator, right } = state;
      if (left === "" || operator === "" || right === "") return state;
      try {
        const computed = eval(`${left} ${operator} ${right}`);
        const calculated = Number.isFinite(computed)
          ? adjustNumber(computed)
          : null;
        return {
          ...initialState,
          left: calculated ? calculated.toString() : "",
          calculated,
          error: calculated ? null : "ERROR"
        };
      } catch (e) {
        const error = e;
        return { ...initialize, error };
      }

    case INITIALIZE:
      return initialState;

    default:
      return state;
  }
}
