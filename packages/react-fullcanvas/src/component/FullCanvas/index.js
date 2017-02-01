// @flow

import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import cn from 'classnames';

let styles = {
  default: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box'
  }
};

@Radium
class FullCanvas extends Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.object
    ]),
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ])
  }
  constructor(props: Object) {
    super(props);
  }
  render() {
    let {
      id,
      className,
      style,
      children
    } = this.props;
    return (
      <div id={ id }
           style={ [styles.default, style] }
           className={ cn('full-canvas', className) }>
        { children }
      </div>
    );
  }
}

export default FullCanvas;
