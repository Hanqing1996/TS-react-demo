import React from 'react';
import './button.css'

// 使得 size 得以传递
interface IProps{
    size?:String,
    children?:String|JSX.Element| Array<JSX.Element>
}

export default function Button(props:IProps){
    return (
    <button className={`button-${props.size}`}> {props.children?props.children:'button'}</button>
    )
}