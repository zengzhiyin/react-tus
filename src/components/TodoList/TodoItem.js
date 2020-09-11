import React, { PureComponent, Fragment } from 'react'
import { Checkbox,Button,Tag } from "antd";

export default class TodoItem extends PureComponent {
    // constructor () {
    //     super()
    //     // console.log(1)
    //     this.state = {
    //         aa:'1'
    //     }
    // }
    // shouldComponentUpdate (nextProps,nextStates){
    //     //为了避免改变其中一个key的时候，阻止其他没改变的组件进行重新渲染，或者使用只对第一层比较的Purecomponent
    //     return nextProps.isCompleted !== this.props.isCompleted
    // }
    todoChange = () =>{
        //预设一个空的函数或者像下面一样判断是否存在这个函数
        const { todoChange = ()=>{} } = this.props
        todoChange(this.props)
    }
    todoDelete = () =>{
        //判断是否存在函数
        this.props.todoDelete&&this.props.todoDelete(this.props)
    }
    todoLike = () =>{
        //判断是否存在函数
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
