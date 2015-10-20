"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var HTMLComponent = (function (_React$Component) {
  _inherits(HTMLComponent, _React$Component);

  function HTMLComponent() {
    _classCallCheck(this, HTMLComponent);

    _get(Object.getPrototypeOf(HTMLComponent.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(HTMLComponent, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "html",
        null,
        _react2["default"].createElement(
          "head",
          null,
          _react2["default"].createElement(
            "title",
            null,
            "Sean J. Conroy"
          ),
          _react2["default"].createElement("meta", { charSet: "utf-8" }),
          _react2["default"].createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge,chrome=1" }),
          _react2["default"].createElement("meta", { name: "description", content: "www.seanconroy.co" }),
          _react2["default"].createElement("meta", { name: "viewport", content: "initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0, width=device-width" }),
          _react2["default"].createElement("script", { src: "https://code.jquery.com/jquery-2.1.4.min.js" }),
          _react2["default"].createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/<version>/react-bootstrap.min.js" })
        ),
        _react2["default"].createElement(
          "body",
          null,
          _react2["default"].createElement("div", { id: "app", dangerouslySetInnerHTML: { __html: this.props.markup } })
        )
      );
    }
  }]);

  return HTMLComponent;
})(_react2["default"].Component);

exports["default"] = HTMLComponent;
module.exports = exports["default"];