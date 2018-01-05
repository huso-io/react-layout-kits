//      

import './index.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const PROPTYPES = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
};

class FullCanvas extends PureComponent {
  render() {
    let {
      id,
      className,
      style,
      children,
    } = this.props;

    return (
      <div id={ id }
           style={ style }
           className={ cn('full-canvas', className) }>
        { children }
      </div>
    );
  }
}

FullCanvas.propTypes = PROPTYPES;

export default FullCanvas;
