/* @flow */
import actionTypes from '../constants/storyActionTypes';

type State = {
  stories: any[]
};
type Action = {
  type: string,
  payload: any,
  meta: ?any
};


/**
 * Story Store
 *
 * @param {Object} state State of story
 * @param {Object} action action
 * @return {Object}
 */
export default function story(state: State = {
  stories: []
}, action: Action): State {
  switch (action.type) {
  case actionTypes.FETCH_STORIES:
    return state;
  default:
    break;
  }
  return state;
}
