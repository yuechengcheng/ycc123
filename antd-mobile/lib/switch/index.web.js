'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Switch = function (_React$Component) {
    (0, _inherits3['default'])(Switch, _React$Component);

    function Switch() {
        (0, _classCallCheck3['default'])(this, Switch);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));

        _this.onChange = function (e) {
            var checked = e.target.checked;
            if (_this.props.onChange) {
                _this.props.onChange(checked);
            }
        };
        _this.onClick = function (e) {
            if (_this.props.onClick) {
                var val = void 0;
                if (e && e.target && e.target.checked !== undefined) {
                    val = e.target.checked;
                } else {
                    val = _this.props.checked;
                }
                _this.props.onClick(val);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Switch, [{
        key: 'render',
        value: function render() {
            var _classNames, _classNames2;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                style = _a.style,
                name = _a.name,
                checked = _a.checked,
                disabled = _a.disabled,
                className = _a.className,
                platform = _a.platform,
                restProps = __rest(_a, ["prefixCls", "style", "name", "checked", "disabled", "className", "platform"]);
            var isAndroid = platform === 'android' || platform === 'cross' && typeof navigator !== 'undefined' && !!navigator.userAgent.match(/Android/i);
            var wrapCls = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, '' + prefixCls, true), (0, _defineProperty3['default'])(_classNames, className, className), (0, _defineProperty3['default'])(_classNames, prefixCls + '-android', isAndroid), _classNames));
            var fackInputCls = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, 'checkbox', true), (0, _defineProperty3['default'])(_classNames2, 'checkbox-disabled', disabled), _classNames2));
            var globalProps = Object.keys(restProps).reduce(function (prev, key) {
                if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
                    prev[key] = restProps[key];
                }
                return prev;
            }, {});
            return _react2['default'].createElement(
                'label',
                { className: wrapCls, style: style },
                _react2['default'].createElement('input', (0, _extends3['default'])({ type: 'checkbox', name: name, className: prefixCls + '-checkbox', disabled: disabled, checked: checked, onChange: this.onChange, value: checked ? 'on' : 'off' }, !disabled ? { onClick: this.onClick } : {}, globalProps)),
                _react2['default'].createElement('div', (0, _extends3['default'])({ className: fackInputCls }, disabled ? { onClick: this.onClick } : {}))
            );
        }
    }]);
    return Switch;
}(_react2['default'].Component);

exports['default'] = Switch;

Switch.defaultProps = {
    prefixCls: 'am-switch',
    name: '',
    checked: false,
    disabled: false,
    onChange: function onChange() {},

    platform: 'cross',
    onClick: function onClick() {}
};
module.exports = exports['default'];