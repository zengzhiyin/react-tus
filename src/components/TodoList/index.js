import React, { Component } from 'react'
import TodoItem  from "./TodoItem";
import PropTypes from "prop-types";
import './index.css';

export default class TodoList extends Component {
    static propTypes = {
        todos:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            isCompleted:PropTypes.bool.isRequired,
        })).isRequired,
        todoChange:PropTypes.func,
        todoDelete:PropTypes.func
    }
    render() {
        return (
            <>
                <ul>
                    {
                    this.props.todos.map((item)=>{
                        return <TodoItem key={item.id} {...item} todoChange={this.props.todoChange} todoDelete={this.props.todoDelete} todoLike={this.props.todoLike}/> 
                    })
                    }
                </ul>
            </>
        )
    }
}
