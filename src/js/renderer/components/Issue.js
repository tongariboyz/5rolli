/* @flow */
import React, {PropTypes} from 'react';
import nbem from 'nbem';

const propTypes = {
  issue: PropTypes.object.isRequired
};


export default class Issue extends React.Component {
  /**
   * render
   *
   * @return {ReactElement}
   */
  render(): React.Element {
    const i = nbem();
    const {current, past, open, close, wait} = this.props.issue.summary;
    return (
      <div className={i('Issue')}>
        <p className={i('&title')}>{this.props.issue.title}</p>
        <p className={i('&summary')}>
          {current > 0 && <span className={i('&&current')}>{current}</span>}
          {past > 0 && <span className={i('&&past')}>{past}</span>}
          {open > 0 && <span className={i('&&open')}>{`OPEN: ${open}`}</span>}
          {close > 0 && <span className={i('&&close')}>{`CLOSE: ${close}`}</span>}
          {wait > 0 && <span className={i('&&wait')}>{`WAIT: ${wait}`}</span>}
        </p>
      </div>
    );
  }
}

Issue.propTypes = propTypes;
