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
  issues: [
    {
      id: '1',
      summary: {
        current: 2,
        past: 1,
        open: 2,
        close: 2,
        wait: 2
      },
      title: 'Issue 1'
    }, {
      id: '2',
      summary: {
        current: 0,
        past: 0,
        open: 2,
        close: 0,
        wait: 5
      },
      title: 'Issue 2'
    }
  ],
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
