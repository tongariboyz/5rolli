/* @flow */
import types from '../constants/storyActionTypes';
import type {Action} from '../flowtypes';


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
