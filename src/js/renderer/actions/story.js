/* @flow */
import types from '../constants/storyActionTypes';

type Action = {
  type: string,
  meta: {
    client: {
      type: string,
      next: Function
    }
  }
};


/**
 * ストーリー一覧の取得
 *
 * @return {Object}
 */
export function fetchStories(): Action {
  return {
    type: types.FETCH_STORIES,
    meta: {
      client: {
        type: types.RESPONSE_STORIES,
        next: client => client.getStories()
      }
    }
  };
}
