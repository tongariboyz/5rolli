/* @flow */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Issue from '../components/Issue';

const propTypes = {
  story: PropTypes.object.isRequired
};


class IssueListView extends React.Component {
  /**
   * render Issues
   *
   * @return {ReactElement[]}
   */
  renderIssues(): React.Element {
    return this.props.story.issues.map((issue, key) => {
      return (
        <Issue
          index={this.props.story.index}
          issue={issue}
          key={key}
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
    return <div className="IssueListView">{this.renderIssues()}</div>;
  }
}

/**
 * state を整形
 *
 * @param {Object} state state
 * @return {Object}
 */
function mapStateToProps(state) {
  return {story: state.story};
}

IssueListView.propTypes = propTypes;
export default connect(mapStateToProps)(IssueListView);
