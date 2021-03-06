/* tslint:disable:no-switch-case-fall-through */
/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import ReactDOM from 'react-dom';
import Modal from './Modal';
export default function a() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    if (!args || !args[2]) {
        // console.log('Must specify callbackOrActions');
        return {
            close: function close() {}
        };
    }
    var prefixCls = 'am-modal';
    var title = args[0];
    var type = args[3] || 'default';
    var defaultValue = args[4] || '';
    var data = {};
    function onChange(e) {
        var target = e.target;
        var inputType = target.getAttribute('type');
        data[inputType] = target.value;
    }
    var inputDom = void 0;
    var focusFn = function focusFn(input) {
        setTimeout(function () {
            if (input) {
                input.focus();
            }
        }, 500);
    };
    switch (type) {
        case 'login-password':
            inputDom = React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    React.createElement('input', { type: 'text', defaultValue: defaultValue, ref: function ref(input) {
                            return focusFn(input);
                        }, onChange: onChange })
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    React.createElement('input', { type: 'password', defaultValue: '', onChange: onChange })
                )
            );
            break;
        case 'secure-text':
            inputDom = React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    React.createElement('input', { type: 'password', defaultValue: '', ref: function ref(input) {
                            return focusFn(input);
                        }, onChange: onChange })
                )
            );
            break;
        case 'plain-text':
        case 'default':
        default:
            inputDom = React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    React.createElement('input', { type: 'text', defaultValue: defaultValue, ref: function ref(input) {
                            return focusFn(input);
                        }, onChange: onChange })
                )
            );
            break;
    }
    var content = React.createElement(
        'div',
        null,
        React.createElement(
            'label',
            null,
            args[1],
            inputDom
        )
    );
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        ReactDOM.unmountComponentAtNode(div);
        if (div && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
    function getArgs(func) {
        var text = data.text || '';
        var password = data.password || '';
        if (type === 'login-password') {
            return func(text, password);
        } else if (type === 'secure-text') {
            return func(password);
        }
        return func(text);
    }
    var actions = void 0;
    if (typeof args[2] === 'function') {
        actions = [{ text: '取消' }, { text: '确定', onPress: function onPress() {
                getArgs(args[2]);
            } }];
    } else {
        actions = args[2].map(function (item) {
            return {
                text: item.text,
                onPress: function onPress() {
                    if (item.onPress) {
                        return getArgs(item.onPress);
                    }
                }
            };
        });
    }
    var footer = actions.map(function (button) {
        var orginPress = button.onPress || function () {};
        button.onPress = function () {
            var res = orginPress();
            if (res && res.then) {
                res.then(function () {
                    close();
                });
            } else {
                close();
            }
        };
        return button;
    });
    ReactDOM.render(React.createElement(
        Modal,
        { visible: true, transparent: true, prefixCls: prefixCls, title: title, closable: false, maskClosable: false, transitionName: 'am-zoom', footer: footer, maskTransitionName: 'am-fade' },
        React.createElement(
            'div',
            { style: { zoom: 1, overflow: 'hidden' } },
            content
        )
    ), div);
    return {
        close: close
    };
}