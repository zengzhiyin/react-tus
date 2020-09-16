
import { Button } from 'antd'
import React, { Component,createContext } from 'react'

const {
    Provider,
    Consumer:CounterConsumer
} = createContext()


class CounterProvider extends Component {
    constructor(){
        super()
        this.state = {
            count:100
        }
    }
    render(){
        return(
            <Provider value={
                    {
                        count:this.state.count
                    }
                }>
                {this.props.children}
            </Provider>
        )
    }
}

class CountBtn extends Component {
    render(){
        return (
            <Button>{this.props.children}</Button>
        )
    }
}

class Counter extends Component {
    render(){
        return (
            <CounterConsumer>
                {(arg)=>{
                    console.log(arg)
                    return(
                        <span>{arg.count}</span>
                    )
                }}
            </CounterConsumer>
        )
    }
}

export default class app extends Component {
    render() {
        return (
            <CounterProvider>
                <CountBtn type="decrement">-</CountBtn>
                <Counter></Counter>
                <CountBtn type="increment">+</CountBtn>
            </CounterProvider>
        )
    }
}
