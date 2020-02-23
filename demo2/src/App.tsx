import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Button from './button'

export default class App extends React.Component {
    /**
     * target:触发事件的元素;
     * currentTarget:设置监听事件的元素
     * React.MouseEvent<HTMLButtonElement> 的作用是指定 e.currentTarget 为 HTMLButtonElement 类型，等同于断言
     * 由源码可知，currentTarget 可以指定类型;target 无法指定类型
     */
    onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget)
    }

    render() {
        return (
            <div className='App'>
                <Button onClick={this.onClick}>普通按钮</Button>
                <Button onClick={this.onClick}>
                    <span className="span1">1111111111</span>
                    <span>2</span>
                </Button>
                <Button size="small" />
                <Button size="big" />
            </div>
        )
    }
}