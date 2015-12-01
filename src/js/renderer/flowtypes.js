/* @flow */
import {STORY_TYPE, STORY_STATUS} from './constants/story';

export type Member = {
  username: string,
  avatarUrl: ?string
};

export type Sprint = {
  name: string,
  due: Date
};

export type StoryType = $Enum<typeof STORY_TYPE>;
export type StoryStatus = $Enum<typeof STORY_STATUS>;

export type InvalidStory = {
  title: string,
  type: typeof STORY_TYPE.invalid,
  card: {
    listName: string,
    labels: string[],
    pos: number,
    url: string
  }
};

export type Story = {
  id: number,
  title: string,
  type: typeof STORY_TYPE.story,
  status: StoryStatus,
  parentId: number,
  dependIds: number[],
  members: Member[],
  children: Story[],
  sprint?: Sprint,
  time?: {
    spent: ?number,
    es50: ?number,
    es90: ?number
  },
  card: {
    listName: string,
    labels: string[],
    pos: number,
    url: string
  }
};

export type Issue = {
  id: number,
  title: string,
  type: typeof STORY_TYPE.issue,
  status: StoryStatus,
  dependIds: number[],
  members: Member[],
  children: Story[],
  card: {
    listName: string,
    labels: string[],
    pos: number,
    url: string
  }
}

export type StoryNode = InvalidStory | Story | Issue;

export type Action = {
  type: string,
  payload?: any,
  meta?: {
    client?: {
      type: string,
      next: Function
    }
  }
};

export type MemberSummary = {
  member: Member,
  spent: ?number,
  es50: ?number,
  es90: ?number
};
