/* @flow */
import React from 'react';
import nbem from 'nbem';


/**
 * Login
 */
export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      apiKey: '',
      apiToken: '',
      boardUrl: ''
    };
  }

  /**
   * render
   * @return {ReactElement}
   */
  render(): React.Element {
    const l = nbem();
    const f = nbem();
    return (
      <div className="LoginView">
        <div className={l('Login')}>
          <div className={l('&logo')}>
            <img src="images/5rolliLogo.png" />
          </div>
          <div className={l('&form')}>
            <div className={f('Field')}>
              <input
                className={f('&input')}
                onChange={e => this.setState({apiToken: e.value})}
                placeholder="Trello Developer Api Token"
                type="text"
                value={this.state.apiToken}
              />
            </div>
            <div className={f('Field')}>
              <input
                className={f('&input')}
                onChange={e => this.setState({apiKey: e.value})}
                placeholder="Trello Developer Api Key"
                type="text"
                value={this.state.apiKey}
              />
            </div>
            <div className={f('Field')}>
              <input
                className={f('&input')}
                onChange={e => this.setState({boardUrl: e.value})}
                placeholder="Trello Board URL"
                type="text"
                value={this.state.boardUrl}
              />
            </div>
            <div className={l('&&submit')}>
              <button
                className={l('&&&btn', 'btn')}
                onClick={() => {}}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
