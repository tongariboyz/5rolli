/* @flow */
import StoryClient from '../helpers/StoryClient';
import types from '../constants/storyActionTypes';
import ipcTypes from '../../common/ipcTypes';
import ipc from '../helpers/ipc';
import type {Action} from '../flowtypes';

/**
 * Index を変更する
 *
 * @param {string} index current issue id
 * @return {Object}
 */
export function changeIndex(index: string): Action {
  return {
    payload: {index},
    type: types.CHANGE_INDEX
  };
}

/**
 * ストーリー一覧の取得
 *
 * @param {StoryClient} client story client
 * @return {Object}
 */
export function fetchStories(): Function {
  return (dispatch, getState) => {
    dispatch({
      type: types.FETCH_STORIES
    });
    const client = getState().story.client;
    return dispatch({
      payload: client.getStories(),
      type: types.RECEIVE_STORIES
    });
  };
}


/**
 * ログインアクション
 *
 * @param {string} apiToken Trello API Token
 * @param {string} apiKey Trello API Key
 * @param {string} boardUrl Trello board url
 * @return {Function}
 */
export function login(apiToken: string, apiKey: string, boardUrl: string): Function {
  return dispatch => {
    const client = new StoryClient(apiToken, apiKey, boardUrl);
    dispatch({
      payload: client,
      type: types.LOGIN
    });
    return dispatch(fetchStories(client));
  };
}


/**
 * 設定ファイル読み込み完了
 *
 * @param {Object} config config object
 * @return {Function}
 */
export function loadConfig(config: Object): Function {
  return dispatch => {
    dispatch({
      payload: config,
      type: types.LOAD_CONFIG
    });
    const {apiToken, apiKey, boardUrl} = config;
    return dispatch(login(apiToken, apiKey, boardUrl));
  };
}


/**
 * 初期化
 *
 * @return {Object}
 */
export function initialize(): Action {
  ipc.send(ipcTypes.CONFIG_LOAD_REQUEST);
  return {
    type: types.INIT
  };
}

