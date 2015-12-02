/* @flow */
import React, {PropTypes} from 'react';
import MemberSummary from './MemberSummary';

const propTypes = {
  memberSummary: PropTypes.array.isRequired
};


export default class MemberSummaryView extends React.Component {
  /**
   * render Member Summaries
   *
   * @return {ReactElement[]}
   */
  renderMemberSummaries(): React.Element {
    return this.props.memberSummary.map((ms, key) => {
      return (
        <MemberSummary
          key={key}
          memberSummary={ms}
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
    return <div className="MemberSummaryView">{this.renderMemberSummaries()}</div>;
  }
}

MemberSummaryView.propTypes = propTypes;
