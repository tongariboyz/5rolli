/* @flow */
import React, {PropTypes} from 'react';
import nbem from 'nbem';

const propTypes = {
  userSummary: PropTypes.object.isRequired
};


export default class UserSummary extends React.Component {
  /**
   * render
   *
   * @return {ReactElement}
   */
  render(): React.Element {
    const u = nbem();
    const {userSummary} = this.props;
    return (
      <div className={u('UserSummary')}>
        <div className={u('&user')}>
          <img
            className={u('&&thumb')}
            src={userSummary.imagePath}
          />
        </div>
        <div className={u('&content')}>
          <div className={u('&&time')}>
            <p>
              <span className={u('&&&result')}>{userSummary.result}</span>
              /
              <span className={u('&&&es50')}>{userSummary.es50}</span>
              /
              <span className={u('&&&es90')}>{userSummary.es90}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

UserSummary.propTypes = propTypes;
