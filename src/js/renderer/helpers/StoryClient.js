/* @flow */


/**
 * Story Client
 */
export default class StoryClient {
  apiToken: string;
  boardUrl: string;

  /**
   * constructor
   *
   * @param {string} apiToken trello api token
   * @param {string} boardUrl trello board url
   */
  constructor(apiToken: string, boardUrl: string) {
    this.apiToken = apiToken;
    this.boardUrl = boardUrl;
  }

  /**
   * Story 一覧を取得する
   *
   * @return {Promise<Object[], null>}
   */
  getStories(): Promise {
    // dummy
    const dummyStories = [];
    return Promise.resolve(dummyStories);
  }
}
