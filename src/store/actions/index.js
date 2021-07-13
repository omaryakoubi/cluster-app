import {
  INCREMENT_STEP,
  DECREMENT_STEP,
  ACCEPT_TERMS_AND_CONDITIONS,
} from "./types";

export const incrementStep = () => (dispatch) => {
  dispatch({ type: INCREMENT_STEP });
};

export const decrementStep = () => (dispatch) => {
  dispatch({ type: DECREMENT_STEP });
};

export const toggleTermsAndConditions = () => (dispatch) => {
  dispatch({ type: ACCEPT_TERMS_AND_CONDITIONS });
};
