/* @flow */
import React, {PropTypes} from 'react';
import nbem from 'nbem';

const propTypes = {
  index: PropTypes.string.isRequired,
  issue: PropTypes.object.isRequired
};


export default class Issue extends React.Component {
  /**
   * クラス名を返す
   *
   * @return {string} classname
   */
  getRootClassName(): string {
    const {open, close, wait} = this.props.issue.summary;
    if (this.props.issue.id === this.props.index) {
      return 'Issue:isActive';
    } else if (open > 0) {
      return 'Issue:isOpen';
    } else if (open === 0 && wait === 0) {
      return 'Issue:isClosed';
    } else if (open === 0 && close === 0 && wait > 0) {
      return 'Issue:isWaiting';
    }
    return 'Issue';
  }

  /**
   * render
   *
   * @return {ReactElement}
   */
  render(): React.Element {
    const i = nbem();
    const {current, past, open, close, wait} = this.props.issue.summary;
    return (
      <div className={i(this.getRootClassName())}>
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
