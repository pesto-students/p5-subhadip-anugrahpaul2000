import { Actions } from "../actionTypes/index";

let initialState = { step: 0 };

function StepCounter(state = initialState, action) {
  switch (action.type) {
    case Actions.INC_STEP:
      return {
        step: state.step + 1
      };

    case Actions.RESET_STEP:
      return {
        step: 0
      };

    default:
      return state;
  }
}

export default StepCounter;
