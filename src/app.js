import React, { Component, Fragment } from 'react'
import { 
    TodoHeader,
    TodoList,
    Todoinput,
    // Like
 } from "./components";

import http from "./services";

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            date: new Date(),
            title:'待办事项列表',
            desc:'今日事，今日毕',
            todos:[
                {
                    id:1,
                    title:'吃饭',
                    isCompleted:true,
                    isLike: true
                },
                {
                    id:3,
                    title:'睡觉',
                    isCompleted:false,
                    isLike: true
                },
                {
                    id:8,
                    title:'扯淡',
                    isCompleted:false,
                    isLike: false
                }
            ]
        }
    }
    addTodo = (todotitle) =>{
        // console.log(this.setId())
        this.setState({
            todos:this.state.todos.concat({
                id:this.setId(),
                title:todotitle,
                isCompleted:false
            })
        })
    }
    setId = () =>{
        const arr = [...this.state.todos].sort((a,b)=>{
            return a.id - b.id
        })
        let id = 0
        if(arr.length === 0){
            return 0
        }
        if(arr.length === 1){
            return arr[0].id === 0?1:0
        }
        for (let i = 0; i < arr.length; i++) {
            if(i===arr.length-1){
                break
            }else if(arr[i+1].id - arr[i].id > 1){
                id = arr[i].id + 1
                break
            }else{
                id = arr[arr.length - 1].id + 1
            }           
        }
        return id
    }
    todoChange = (todo) =>{
        // let newTodo = [...this.state.todos]
        // newTodo.forEach((item)=>{
        //     if(item.id === todo.id){
        //         item.isCompleted = !item.isCompleted
        //     } 
        // })
        // this.setState({
        //     todos:newTodo
        // })
        this.setState((prevState)=>{
            // console.log(prevState)
            return {
                todos: prevState.todos.map(item=>{
                    if(item.id === todo.id){
                        item.isCompleted = !item.isCompleted
                    }
                    return item
                })
            }
        })
    }
    todoLike = (todo) =>{
        this.setState((prevState)=>{
            // console.log(prevState)
            return {
                todos: prevState.todos.map(item=>{
                    if(item.id === todo.id){
                        item.isLike = !item.isLike
                    }
                    return item
                })
            }
        })
    }
    todoDelete = (todo) =>{
        let newTodo = [...this.state.todos]
        newTodo.forEach((item,index)=>{
            if(item.id === todo.id){
                newTodo.splice(index,1)
            } 
        })
        this.setState({
            todos:newTodo
        })
    }

    componentDidMount() {
        http.get(http.apiUrl.todos).then((data)=>{
            console.log(data)
        })
    }
    
    componentWillUnmount() {
    }

    
    render() {
        return (
            <Fragment>
                <TodoHeader desc={this.state.desc}>
                    {this.state.title}
                </TodoHeader>
                <Todoinput addTodo={this.addTodo}></Todoinput>
                <TodoList todos={this.state.todos} todoChange={this.todoChange} todoDelete={this.todoDelete} todoLike={this.todoLike}></TodoList>
                {/* <Like></Like> */}
            </Fragment>
        )
    }
}
