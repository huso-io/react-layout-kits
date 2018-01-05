'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./index.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PROPTYPES = {
  id: _propTypes2['default'].string,
  className: _propTypes2['default'].string,
  style: _propTypes2['default'].object,
  children: _propTypes2['default'].oneOfType([_propTypes2['default'].array, _propTypes2['default'].object])
};

var FullCanvas = function (_PureComponent) {
  _inherits(FullCanvas, _PureComponent);

  function FullCanvas() {
    _classCallCheck(this, FullCanvas);

    return _possibleConstructorReturn(this, (FullCanvas.__proto__ || Object.getPrototypeOf(FullCanvas)).apply(this, arguments));
  }

  _createClass(FullCanvas, [{
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            id = _props.id,
            className = _props.className,
            style = _props.style,
            children = _props.children;


        return _react2['default'].createElement(
          'div',
          { id: id,
            style: style,
            className: (0, _classnames2['default'])('full-canvas', className) },
          children
        );
      }

      return render;
    }()
  }]);

  return FullCanvas;
}(_react.PureComponent);

FullCanvas.propTypes = PROPTYPES;

exports['default'] = FullCanvas;