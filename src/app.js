
import { Button } from 'antd'
import React, { Component,createContext,Fragment } from 'react'

// import Count from "./demo/count";

const {
    Provider,
    Consumer:CounterConsumer
} = createContext()


class CounterProvider extends Component {
    constructor(){
        super()
        this.state = {
            count:100,
            x:10
        }
    }
    incrementCount = () =>{
        this.setState({
            count:this.state.count + 1
        })
    }
    decrementCount = () =>{
        this.setState({
            count:this.state.count - 1
        })
    }
    render(){
        return(
            <Provider value={
                    {
                        count:this.state.count,
                        onIncrementCount:this.incrementCount,
                        onDecrementCount:this.decrementCount
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
            <CounterConsumer>
                {({onIncrementCount,onDecrementCount})=>{
                    const handle = this.props.type==='decrement'?onDecrementCount:onIncrementCount
                    return(
                        <Fragment>
                            <Button onClick={handle}>{this.props.children}</Button>
                        </Fragment>
                    )
                }}
            </CounterConsumer>

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
                        <Fragment>
                            <span>{arg.count}</span>
                        </Fragment>
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
