/* @flow */
import React, {PropTypes} from 'react';
import moment from 'moment';
import nbem from 'nbem';
import {CURRENT_DAYS} from '../constants/story';

const propTypes = {
  story: PropTypes.object.isRequired
};


export default class Story extends React.Component {
  /**
   * SprintStatus を返す
   *
   * @param {Object} sprint sprint object
   * @return {string}
   */
  getSprintStatus(sprint: Object): string {
    if (sprint) {
      const diffDays = moment().diff(moment(sprint.due), 'd');
      if (diffDays <= CURRENT_DAYS && diffDays >= 0) {
        return 'isCurrent';
      } else if (diffDays > 0) {
        return 'isPast';
      }
    }
    return 'isFuture';
  }

  /**
   * StoryStatus を整形して返す
   *
   * @param {string} status story status
   * @return {string}
   */
  getStoryStatus(status: string): string {
    return `is${status.charAt(0).toUpperCase() + status.substring(1)}`;
  }

  /**
   * render Member List
   *
   * @return {ReactElement|null}
   */
  renderMemberList():React.Element {
    const ml = nbem();
    ml('MemberList');
    const members = this.props.story.members.map((m, key) => {
      return (
        <div
          className={ml('&item')}
          key={key}
        >
          <img
            className={ml('&&thumb')}
            src={m.avatarUrl}
          />
        </div>
      );
    });
    if (members.length === 0) {
      return null;
    }
    return <div className={ml('MemberList')}>{members}</div>;
  }

  /**
   * render
   *
   * @return {ReactElement}
   */
  render(): React.Element {
    const {story} = this.props;
    const s = nbem();
    return (
      <div className="StoryWrapper">
        <div className={`${s('Story')} ${this.getSprintStatus(story.sprint)} ${this.getStoryStatus(story.status)}`}>
          <div className={s('&status')}>
            <p className={s('&&label')}>{story.status.toUpperCase()}</p>
          </div>
          <div className={s('&content')}>
            <div className={s('&&data')}>
              {this.renderMemberList(s)}
              <div className={s('&&&listName')}>
                <p>{story.card.listName}</p>
              </div>
              <div className={s('&&&time')}>
                <p>
                  <span>{story.time.spent ? story.time.spent : 0}</span>
                  /
                  <span>{story.time.es50}</span>
                  /
                  <span>{story.time.es90}</span>
                </p>
              </div>
            </div>
            <div className={s('&&title')}>
              <p>{story.title}</p>
            </div>
          </div>
        </div>
        <div className="NestStory">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Story.propTypes = propTypes;
