import * as actionType from '../actions/ActionType';

const counterReducer = (state = false, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      return state + action.payload;
    case actionType.SIGNEOUT:
      return state - action.payload;
    default:
      return state
  }
}

export default counterReducer;