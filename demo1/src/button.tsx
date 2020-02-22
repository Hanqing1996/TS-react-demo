import React from 'react';
import './button.css'

interface IProps {
    size?: String;
    onClick?: React.MouseEventHandler
}

const Button: React.FunctionComponent<IProps> = function (props) {
    return (
        <button className={`button-${props.size}`} onClick={props.onClick}> {props.children ? props.children : 'button'}</button>
    )
}

export default Button