import { DECREMENT_STEP, INCREMENT_STEP } from "../actions/types";

const initialState = { step: 0 };

const stepReducer = (state = initialState, action) => {
  let { type } = action;
  switch (type) {
    case INCREMENT_STEP:
      return {
        ...state,
        step: (state.step += 1),
      };
    case DECREMENT_STEP:
      return {
        ...state,
        step: (state.step -= 1),
      };
    default:
      return state;
  }
};

export default stepReducer;
