import React, { Component, createRef } from 'react'
import PropTypes from "prop-types";
import { Button, Input } from 'antd';


export default class TodoInput extends Component {
    static propTypes = {
        btnText:PropTypes.string
    }
    static defaultProps = {
        btnText:'添加todo'
    }
    
    constructor (){
        super()
        this.state = {
            inputValue:'',
        }
        this.inputDom = createRef()
        // this.addTodoCopy = this.addTodo.bind(this,124)
    }
    
    addTodo  = () =>{
        if(this.state.inputValue.trim() === ''){
            return
        }
        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue:''
        },()=>{
            //异步回调函数
            this.inputDom.current.focus()
        })
    }
    //搭配bind()改变this指向使用
    // handleInput(id){
    //   console.log(id)
    // }
    handleInput = (event) =>{
        // console.log(event)
        this.setState({
            inputValue:event.currentTarget.value
        })
        // this.state.inputValue = event.currentTarget.value
    }
    handleKeyUp = (e) =>{
        // console.log(e)
        if(e.keyCode === 13){
            this.addTodo()
        }
    }
    render() {
        // console.log(this.props)
        return (
            <div style={{
                paddingLeft:10,
                paddingRight:10
            }}>
                <Input placeholder="请输入" 
                    value={this.state.inputValue}
                    onChange={this.handleInput}
                    onKeyUp = {this.handleKeyUp}
                    ref = {this.inputDom}
                    style={{ width: 200 }}
                />
                <Button type="primary" onClick={this.addTodo}>
                    {this.props.btnText}
                </Button>
                {/* 下面的写法可以改变this指向,否则定义的方法名字必须是箭头函数，不然发生this指向问题(不推荐) */}
                {/* <button onClick={this.addTodoCopy}>
                    {this.props.btnText}
                </button> */}
            </div>
        )
    }
}
