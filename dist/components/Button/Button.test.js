"use strict";

var _react = require("@testing-library/react");

var _Button = require("./Button");

test('Deve obter o botão com um rótulo específico', function () {
  (0, _react.render)( /*#__PURE__*/React.createElement(_Button.Button, {
    label: "I am a button"
  }));

  var buttonElement = _react.screen.getByText(/I am a button/i);

  expect(buttonElement).toBeInTheDocument();
});