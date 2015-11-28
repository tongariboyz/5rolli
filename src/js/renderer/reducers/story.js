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
  stories: [
    {
      children: [{
        children: [{
          children: [{
            children: [],
            id: '14',
            listName: 'Sprint.1 (20151130)',
            members: [{
              imagePath: 'https://pbs.twimg.com/profile_images/506354953082773504/iREqhHol.png'
            }],
            sprintStatus: 'current', // current, past, future
            storyStatus: 'close', // open, close, wait
            time: {
              result: 0,
              val50: 80,
              val90: 180
            },
            title: 'Great-Grandson Story 1',
            url: 'https://google.co.jp'
          }, {
            children: [],
            id: '15',
            listName: 'Sprint.1 (20151130)',
            members: [{
              imagePath: 'https://pbs.twimg.com/profile_images/506354953082773504/iREqhHol.png'
            }],
            sprintStatus: 'current', // current, past, future
            storyStatus: 'open', // open, close, wait
            time: {
              result: 0,
              val50: 80,
              val90: 180
            },
            title: 'Great-Grandson Story 2',
            url: 'https://google.co.jp'
          }],
          id: '13',
          listName: 'Sprint.1 (20151130)',
          members: [{
            imagePath: 'https://pbs.twimg.com/profile_images/506354953082773504/iREqhHol.png'
          }],
          sprintStatus: 'future', // current, past, future
          storyStatus: 'open', // open, close, wait
          time: {
            result: 0,
            val50: 80,
            val90: 180
          },
          title: 'Grandson Story 1',
          url: 'https://google.co.jp'
        }],
        id: '12',
        listName: 'Sprint.1 (20151130)',
        members: [{
          imagePath: 'https://pbs.twimg.com/profile_images/506354953082773504/iREqhHol.png'
        }],
        sprintStatus: 'future', // current, past, future
        storyStatus: 'open', // open, close, wait
        time: {
          result: 0,
          val50: 80,
          val90: 180
        },
        title: 'Child Story 1',
        url: 'https://google.co.jp'
      }, {
        children: [],
        id: '16',
        listName: 'Sprint.1 (20151130)',
        members: [{
          imagePath: 'https://pbs.twimg.com/profile_images/506354953082773504/iREqhHol.png'
        }],
        sprintStatus: 'future', // current, past, future
        storyStatus: 'wait', // open, close, wait
        time: {
          result: 0,
          val50: 80,
          val90: 180
        },
        title: 'Child Story 2',
        url: 'https://google.co.jp'
      }],
      id: '10',
      listName: 'Sprint.1 (20151130)',
      members: [{
        imagePath: 'https://pbs.twimg.com/profile_images/506354953082773504/iREqhHol.png'
      }],
      sprintStatus: 'future', // current, past, future
      storyStatus: 'open', // open, close, wait
      time: {
        result: 0,
        val50: 80,
        val90: 180
      },
      title: 'Story 1',
      url: 'https://google.co.jp'
    }, {
      children: [],
      id: '11',
      listName: 'Sprint.1 (20151130)',
      members: [{
        imagePath: 'https://pbs.twimg.com/profile_images/506354953082773504/iREqhHol.png'
      }],
      sprintStatus: 'current', // current, past, future
      storyStatus: 'open', // open, close, wait
      time: {
        result: 0,
        val50: 80,
        val90: 180
      },
      title: 'Story 2',
      url: 'https://google.co.jp'
    }
  ]
}, action: Action): State {
  switch (action.type) {
  case actionTypes.FETCH_STORIES:
    return state;
  default:
    break;
  }
  return state;
}
