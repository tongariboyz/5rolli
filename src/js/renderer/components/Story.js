/* @flow */
import React, {PropTypes} from 'react';
import nbem from 'nbem';

const propTypes = {
  story: PropTypes.object.isRequired
};


export default class Story extends React.Component {
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
        <div className={`${s('Story')} is-${story.sprintStatus} is-${story.status}`}>
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
