/* @flow */
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../components/Header';
import IssueListView from '../containers/IssueListView';
import StoryView from '../containers/StoryView';
import * as actionCreators from '../actions/story';
import ipc from '../helpers/ipc';
import ipcTypes from '../../common/ipcTypes';


const propTypes = {
  story: PropTypes.object.isRequired
};

/**
 * App
 */
class App extends React.Component {
  componentDidMount() {
    ipc.on(ipcTypes.CONFIG_LOADED, (ev, payload) => {
      this.props.actions.loadConfig(payload);
    });
    this.props.actions.initialize();
  }

  /**
   * render
   * @return {ReactElement}
   */
  render(): React.Element {
    return (
      <div className="Wrapper">
        <Header />
        <div className="Main">
          <IssueListView />
          <StoryView />
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

/**
 * state を整形
 *
 * @param {Object} state state
 * @return {Object}
 */
function mapStateToProps(state) {
  return {story: state.story};
}

export default connect(mapStateToProps, dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
})(App);
