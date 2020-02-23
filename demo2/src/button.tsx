import React from 'react';
import './button.css'

interface IProps {
    size?: String;
    onClick?: React.MouseEventHandler
}
interface IState {
    n: Number
}

class Button extends React.Component<IProps, IState>{
    static defaultProps={
        size:'normal'
    }
    constructor(props:IProps) {
        super(props)
        this.state = {
            n: 100
        }
    }
    render() {
        return (
            <button className={`button-${this.props.size}`} onClick={this.props.onClick}> {this.props.children ? this.props.children : 'button'}{this.state.n}</button>
        )
    }
}

export default Button