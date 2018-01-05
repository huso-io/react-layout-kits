import React, { Component } from 'react';
import FullCanvas from './component/FullCanvas';
import Radium from 'radium';

class App extends Component {
  render() {
    return (
      <FullCanvas style={ {position: 'relative'} }
                  className='bg-test-fill-radial-gradient'>
        <i className='xy-center dot'/>
      </FullCanvas>
    );
  }
}

export default Radium(App);
