/* @flow */
import React, {PropTypes} from 'react';
import nbem from 'nbem';

const propTypes = {
  memberSummary: PropTypes.object.isRequired
};


export default class MemberSummary extends React.Component {
  /**
   * render
   *
   * @return {ReactElement}
   */
  render(): React.Element {
    const m = nbem();
    const {memberSummary} = this.props;
    return (
      <div className={m('MemberSummary')}>
        <div className={m('&member')}>
          <img
            className={m('&&thumb')}
            src={memberSummary.member.avatarUrl}
          />
        </div>
        <div className={m('&content')}>
          <div className={m('&&time')}>
            <p>
              <span className={m('&&&spent')}>{memberSummary.spent}</span>
              /
              <span className={m('&&&es50')}>{memberSummary.es50}</span>
              /
              <span className={m('&&&es90')}>{memberSummary.es90}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

MemberSummary.propTypes = propTypes;
