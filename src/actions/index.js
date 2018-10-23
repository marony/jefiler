import * as actionTypes from './action-types';

// action creators

// push a number button
// export const onNumClick = (number) => ({
//   type: actionTypes.INPUT_NUMBER,
//   number,
// });
export const onNumClick = (number) => {
  console.log(`onNumClick: ${this}`);
  return ({
    type: actionTypes.INPUT_NUMBER,
    number,
  })
};

// push a plus button
// export const onPlusClick = () => ({
//   type: actionTypes.PLUS,
// });
export const onPlusClick = () => {
  console.log(`onPlusClick: ${this}`);
  return ({
    type: actionTypes.PLUS,
  });
}
