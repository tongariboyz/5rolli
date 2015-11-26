/* @flow */
import React from 'react';
import Header from '../components/Header';
import IssueListView from '../containers/IssueListView';
import StoryView from '../containers/StoryView';


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
          <StoryView />
        </div>
      </div>
    );
  }
}
