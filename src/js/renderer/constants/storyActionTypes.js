/* @flow */
import reaction from 'dacho';

/**
 * @type {Object}
 */
const storyActionTypes: {[type: string]: string} = reaction([
  'FETCH_STORIES',
  'RECEIVE_STORIES'
], 'STORY/');

export default storyActionTypes;
