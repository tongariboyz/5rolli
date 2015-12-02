/* @flow */
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Issue from '../components/Issue';
import * as actionCreators from '../actions/story';

const propTypes = {
  actions: PropTypes.object.isRequired,
  story: PropTypes.object.isRequired
};


class IssueListView extends React.Component {
  /**
   * render Issues
   *
   * @return {ReactElement[]}
   */
  renderIssues(): React.Element {
    const {actions, story} = this.props;
    return story.issues.map((issue, key) => {
      return (
        <Issue
          index={story.index}
          issue={issue}
          key={key}
          onChangeIndex={actions.changeIndex}
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

/**
 * action を整形
 *
 * @param {Function} dispatch dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actionCreators, dispatch)};
}

IssueListView.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(IssueListView);
