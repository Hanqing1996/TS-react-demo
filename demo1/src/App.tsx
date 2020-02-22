import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Button from './button'

export default class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Button>普通按钮</Button>
                <Button>
                    <span>1</span>
                    <span>2</span>
                </Button>
                <Button size="small" />
                <Button size="big" />
            </div>
        )
    }
}