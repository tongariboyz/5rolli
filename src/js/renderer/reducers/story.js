/* @flow */
import moment from 'moment';
import StoryClient from '../helpers/StoryClient';
import {CURRENT_DAYS, STORY_TYPE, STORY_STATUS} from '../constants/story';
import actionTypes from '../constants/storyActionTypes';
import type {
  Action,
  Issue,
  IssueSummary,
  Story,
  StoryNode,
  InvalidStory,
  MemberSummary
} from '../flowtypes';

type State = {
  client: ?StoryClient,
  index: number,
  isConnecting: boolean,
  isInitialised: boolean,
  invalids: InvalidStory[],
  issues: Issue[],
  memberSummary: MemberSummary[]
};


/**
 * Issue の summary 情報を渡ってきた Story で更新して返す
 *
 * @param {IssueSummary} summary summary
 * @param {Story|Issue} _story story
 * @return {IssueSummary}
 */
function updateIssueSummary(summary: IssueSummary, _story: Story|Issue): IssueSummary {
  const s = Object.assign({}, summary);
  if (_story.status === STORY_STATUS.open) {
    s.open += 1;
  } else if (_story.status === STORY_STATUS.waiting) {
    s.waiting += 1;
  } else {
    s.close += 1;
  }
  if (_story.sprint) {
    const diffDays = moment().diff(moment(_story.sprint.due), 'd');
    if (_story.status !== STORY_STATUS.close) {
      if (diffDays <= CURRENT_DAYS && diffDays >= 0) {
        s.current += 1;
      } else if (diffDays > 0) {
        s.past += 1;
      }
    }
  }
  return s;
}


/**
 * Story, Issueにchildrenツリーを付与して返す
 *
 * @param {Object} parent Story or Issue
 * @param {Object} childMap parentIdをキーとしたStoryリスト
 * @return {array} child Story, summary
 */
function parseStoryChildren(parent: Story|Issue, childMap: {[key: number]: Story[]}) {
  const stories = childMap[parent.id] || [];
  let summary = {close: 0, current: 0, open: 0, past: 0, waiting: 0};
  const children = stories.map(child => {
    const ret = parseStoryChildren(child, childMap);
    if (ret[0].children.length > 0) {
      summary = updateIssueSummary(ret[1], ret[0]);
    } else {
      summary = updateIssueSummary(summary, ret[0]);
    }
    return ret[0];
  });
  return [Object.assign({}, parent, {children}), summary];
}


/**
 * Story の依存関係から status を変更する
 *
 * @param {StoryNode[]} rawFlatStories story リスト
 * @return {StoryNode[]}
 */
function updateStatus(rawFlatStories: StoryNode[]): StoryNode[] {
  return rawFlatStories.map(s => {
    if (s.type === STORY_TYPE.invalid) {
      return s;
    }
    const _s = ((s: any): Story | Issue);
    if (_s.dependIds.length !== 0) {
      const wait = _s.dependIds.every(id => {
        const dependStory = rawFlatStories.find(ds => ds.id && ds.id === id);
        return dependStory.status && dependStory.status !== STORY_STATUS.open;
      });
      if (!wait) {
        return Object.assign({}, _s, {status: STORY_STATUS.waiting});
      }
    }
    return _s;
  }).map((s, index, arr) => {
    if (s.type !== STORY_TYPE.story) {
      return s;
    }
    const _s = ((s: any): Story);
    const parentStory = arr.find(ps => ps.id && ps.id === _s.parentId);
    if (parentStory.status === STORY_STATUS.waiting) {
      return Object.assign({}, _s, {status: STORY_STATUS.waiting});
    }
    return _s;
  });
}


/**
 * Story
 *
 * @param {Object[]} rawFlatStories storyリスト
 * @return {Object[]}
 */
export function createStoryTree(rawFlatStories: StoryNode[]): {
  issues: Issue[],
  invalids: InvalidStory[]
} {
  const issues: Issue[] = [];
  const invalids: InvalidStory[] = [];
  const storyMap: {[key: number]: Story[]} = {};
  const flatStories = updateStatus(rawFlatStories);

  flatStories.sort((a, b) => {
    return a.card.pos - b.card.pos;
  }).forEach(s => {
    if (s.type === STORY_TYPE.issue) {
      issues.push(((s: any): Issue));
    } else if (s.type === STORY_TYPE.invalid) {
      invalids.push(((s: any): InvalidStory));
    } else {
      const key = ((s: any): Story).parentId;
      if (!storyMap[key]) {
        storyMap[key] = [];
      }
      storyMap[key].push(((s: any): Story));
    }
  });
  return {
    invalids,
    issues: issues.map(issue => {
      const ret = parseStoryChildren(issue, storyMap);
      return Object.assign({}, ret[0], {summary: ret[1]});
    })};
}


/**
 * Story Store
 *
 * @param {Object} state State of story
 * @param {Object} action action
 * @return {Object}
 */
export default function story(state: State = {
  client: null,
  isConnecting: false,
  isInitialised: false,
  issues: [],
  invalids: [],
  index: 0,
  memberSummary: []
}, action: Action): State {
  switch (action.type) {
  case actionTypes.CHANGE_INDEX:
    return Object.assign({}, state, action.payload);
  case actionTypes.LOGIN:
    return Object.assign({}, state, {
      client: action.payload
    });
  case actionTypes.FETCH_STORIES:
    return Object.assign({}, state, {
      isConnecting: true
    });
  case actionTypes.RECEIVE_STORIES:
    if (action.error) {
      return Object.assign({}, state, {client: null, isConnecting: false});
    }
    const ret = createStoryTree(((action.payload: any): StoryNode[]));
    return Object.assign({}, state, {
      isConnecting: false,
      isInitialised: true,
      index: ret.issues && ret.issues[0].id
    }, ret);
  default:
    break;
  }
  return state;
}
