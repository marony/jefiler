import * as actionTypes from '../actions/action-types';

// initial state
const initialAppState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false,
};

// calculator reducer
const calculator = (state = initialAppState, action) => {
  // action type to action creators mapping
  const actionCreators = {
    [actionTypes.INPUT_NUMBER]: inputNumber,
    [actionTypes.PLUS]: pushPlus,
  };

  if (action.type in actionCreators)
    return actionCreators[action.type](state, action);
  return state;
};

// push a number button
const inputNumber = (state, action) => {
  return {
    ...state,
    inputValue: state.inputValue * 10 + action.number,
    showingResult: false,
  };
}

// push a plus button
const pushPlus = (state, action) => {
  return {
    ...state,
    inputValue: 0,
    resultValue: state.resultValue + state.inputValue,
    showingResult: true,
  };
}

export default calculator;
