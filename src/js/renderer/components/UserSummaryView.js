/* @flow */
import React, {PropTypes} from 'react';
import UserSummary from './UserSummary';

const propTypes = {
  userSummary: PropTypes.array.isRequired
};


export default class UserSummaryView extends React.Component {
  /**
   * render User Summaries
   *
   * @return {ReactElement[]}
   */
  renderUserSummaries(): React.Element {
    return this.props.userSummary.map((us, key) => {
      return (
        <UserSummary
          key={key}
          userSummary={us}
        />
      );
    });
  }

  /**
   * render
   *
   * @return {ReactElement}
   */
  render(): React.Element {
    return <div className="UserSummaryView">{this.renderUserSummaries()}</div>;
  }
}

UserSummaryView.propTypes = propTypes;
