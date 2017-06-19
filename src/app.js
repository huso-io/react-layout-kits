import React, { Component } from 'react';
import { FullCanvas } from './component/Layout';
import Radium from 'radium';

@Radium
class App extends Component {
  render() {
    return (
      <FullCanvas>
        <div>FullCanvas Demo</div>
      </FullCanvas>
    );
  }
}

export default App;
