import { ACCEPT_TERMS_AND_CONDITIONS } from "../actions/types";

const initialState = { termsAndConditions: false };

export const termsAndConditionsReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACCEPT_TERMS_AND_CONDITIONS:
      return {
        ...state,
        termsAndConditions: !state.termsAndConditions,
      };
    default:
      return state;
  }
};

export default termsAndConditionsReducer;
