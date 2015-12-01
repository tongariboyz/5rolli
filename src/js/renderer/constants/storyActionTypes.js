/* @flow */
import reaction from 'dacho';

/**
 * @type {Object}
 */
const storyActionTypes: {[type: string]: string} = reaction([
  'FETCH_STORIES',
  'RECEIVE_STORIES',
  'LOGIN',
  'INIT',
  'LOAD_CONFIG'
], 'STORY/');

export default storyActionTypes;
