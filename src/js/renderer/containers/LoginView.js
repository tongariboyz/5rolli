/* @flow */
import React from 'react';
import {connect} from 'react-redux';
import Login from '../components/Login';

const propTypes = {};


class LoginView extends React.Component {
  /**
   * render
   *
   * @return {ReactElement}
   */
  render(): React.Element {
    return <Login />;
  }
}

/**
 * state を整形
 *
 * @return {Object}
 */
function mapStateToProps() {
  return {};
}

/**
 * action を整形
 *
 * @return {Object}
 */
function mapDispatchToProps() {
  return {};
}

LoginView.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
