/* @flow */
import React from 'react';
import Header from '../components/Header';
import IssueListView from '../containers/IssueListView';


/**
 * App
 */
export default class App extends React.Component {
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
        </div>
      </div>
    );
  }
}
