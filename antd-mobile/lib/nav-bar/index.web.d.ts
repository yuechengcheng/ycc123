/// <reference types="react" />
import React from 'react';
import NavBarProps from './PropsType';
export default class NavBar extends React.Component<NavBarProps, any> {
    static defaultProps: {
        prefixCls: string;
        mode: string;
        iconName: string;
        onLeftClick(): void;
    };
    render(): JSX.Element;
}
