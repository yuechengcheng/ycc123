import _extends from 'babel-runtime/helpers/extends';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
import React from 'react';
import classNames from 'classnames';

var Badge = function (_React$Component) {
    _inherits(Badge, _React$Component);

    function Badge() {
        _classCallCheck(this, Badge);

        return _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
    }

    _createClass(Badge, [{
        key: 'render',
        value: function render() {
            var _classNames, _classNames2;

            var _a = this.props,
                className = _a.className,
                prefixCls = _a.prefixCls,
                children = _a.children,
                text = _a.text,
                size = _a.size,
                overflowCount = _a.overflowCount,
                dot = _a.dot,
                corner = _a.corner,
                hot = _a.hot,
                restProps = __rest(_a, ["className", "prefixCls", "children", "text", "size", "overflowCount", "dot", "corner", "hot"]);
            overflowCount = overflowCount;
            text = typeof text === 'number' && text > overflowCount ? overflowCount + '+' : text;
            // dot mode don't need text
            if (dot) {
                text = '';
            }
            var scrollNumberCls = classNames((_classNames = {}, _defineProperty(_classNames, prefixCls + '-dot', dot), _defineProperty(_classNames, prefixCls + '-dot-large', dot && size === 'large'), _defineProperty(_classNames, prefixCls + '-text', !dot && !corner), _defineProperty(_classNames, prefixCls + '-corner', corner), _defineProperty(_classNames, prefixCls + '-corner-large', corner && size === 'large'), _classNames));
            var badgeCls = classNames((_classNames2 = {}, _defineProperty(_classNames2, className, !!className), _defineProperty(_classNames2, prefixCls, true), _defineProperty(_classNames2, prefixCls + '-not-a-wrapper', !children), _defineProperty(_classNames2, prefixCls + '-corner-wrapper', corner), _defineProperty(_classNames2, prefixCls + '-hot', !!hot), _defineProperty(_classNames2, prefixCls + '-corner-wrapper-large', corner && size === 'large'), _classNames2));
            return React.createElement(
                'span',
                { className: badgeCls },
                children,
                (text || dot) && React.createElement(
                    'sup',
                    _extends({ className: scrollNumberCls }, restProps),
                    text
                )
            );
        }
    }]);

    return Badge;
}(React.Component);

export default Badge;

Badge.defaultProps = {
    prefixCls: 'am-badge',
    size: 'small',
    overflowCount: 99,
    dot: false,
    corner: false
};