"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

require("./button.css");

var _reactJss = require("react-jss");

var designTokens = _interopRequireWildcard(require("../design-tokens.tokens.json"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Primary UI component for user interaction
 */
var useStyles = (0, _reactJss.createUseStyles)({
  myClass: {
    backgroundColor: designTokens.color.vermelhoerro.value
  }
});

var Button = function Button(_ref) {
  var primary = _ref.primary,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      label = _ref.label,
      props = (0, _objectWithoutProperties2.default)(_ref, ["primary", "backgroundColor", "size", "label"]);
  var aditionalClass = useStyles();
  var mode = primary ? "storybook-button--primary ".concat(aditionalClass.myClass) : "storybook-button--secondary";
  return /*#__PURE__*/_react.default.createElement("button", Object.assign({
    type: "button",
    className: ['storybook-button', "storybook-button--".concat(size), mode].join(' '),
    style: backgroundColor && {
      backgroundColor: backgroundColor
    }
  }, props), label);
};

exports.Button = Button;
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};