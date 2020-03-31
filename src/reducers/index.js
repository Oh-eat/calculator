const ADD_NUMBER = "ADD_NUMBER";
const SET_OPERATOR = "SET_OPERATOR";
const BACKSPACE = "BACKSPACE";
const CALCULATE = "CALCULATE";
const INITIALIZE = "INITIALIZE";

export const addNumber = number => ({ type: ADD_NUMBER, number });
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
      const nextTarget = parsed === parsedNew ? parsed : parsedNew;
      return { ...state, [targetA]: nextTarget.toString() };
    case SET_OPERATOR:
      return state.left === ""
        ? state
        : { ...state, operator: action.operator };
    case BACKSPACE:
      const targetB =
        state.right !== ""
          ? "right"
          : state.operator !== ""
          ? "operator"
          : "left";
      const value = state[targetB];
      const nextValue =
        value[value.length - 2] === "."
          ? value.slice(0, value.length - 2)
          : value.slice(0, value.length - 1);
      return { ...state, [targetB]: nextValue };
    case CALCULATE:
      const { left, operator, right } = state;
      if (left === "" || operator === "" || right === "") return state;
      const parsedLeft = parseFloat(left);
      const parsedRight = parseFloat(right);
      const calculated =
        operator === "+"
          ? parsedLeft + parsedRight
          : operator === "-"
          ? parsedLeft - parsedRight
          : operator === "×"
          ? parsedLeft * parsedRight
          : parsedRight === 0
          ? null
          : parsedLeft / parsedRight;
      const error = calculated === null ? "0으로 나눌 수 없습니다." : null;
      return {
        ...initialState,
        left: calculated ? calculated.toString() : "",
        calculated,
        error
      };
    case INITIALIZE:
      return initialState;
    default:
      return state;
  }
}
