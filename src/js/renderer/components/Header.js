/* @flow */
import React from 'react';
import nbem from 'nbem';


/**
 * App
 */
export default class Header extends React.Component {
  /**
   * render
   * @return {ReactElement}
   */
  render(): React.Element {
    const h = nbem();
    return (
      <div className={h('Header')}>
        <div className={h('&symbol')}>
          <img src="images/5rolli.svg" />
        </div>
      </div>
    );
  }
}
