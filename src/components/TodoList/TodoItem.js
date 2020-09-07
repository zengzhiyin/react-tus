import React, { Component, Fragment } from 'react'
import { Checkbox,Button,Tag } from "antd";



export default class TodoItem extends Component {
    // constructor () {
    //     super()
    //     // console.log(1)
    //     this.state = {
    //         aa:'1'
    //     }
    // }
    shouldComponentUpdate (nextProps,nextStates){
        console.log(nextProps,nextStates)
        return true
    }
    todoChange = () =>{
        const { todoChange = ()=>{} } = this.props
        todoChange(this.props)
    }
    todoDelete = () =>{
        this.props.todoDelete&&this.props.todoDelete(this.props)
    }
    todoLike = () =>{
        this.props.todoLike&&this.props.todoLike(this.props)
    }
    render() {
        return (
            <Fragment>
                <li>
                    <Checkbox 
                        type="checkbox"
                        checked={this.props.isCompleted}
                        onChange={this.todoChange}
                    />
                    <span >
                        {this.props.title}
                    </span>
                    <Button onClick={this.todoDelete} className="delete" type="primary" size="small">
                        删除
                    </Button>
                    <Tag color={this.props.isCompleted?'green':'red'} className="tag">
                        {this.props.isCompleted?'完成':'未完成'}
                    </Tag>
                    <Tag onClick={this.todoLike} color={this.props.isLike?'green':'red'} className="tag">
                        {this.props.isLike?'喜欢':'不喜欢'}
                    </Tag>
                </li> 
            </Fragment>
        )
    }
}
