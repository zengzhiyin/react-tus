//createContext提供了一个跨组件通信的方式
import React, { Component,createContext } from 'react'
//这里对createContext()实行方法以后进行解构
const {
    Provider,
    Consumer:CounterConsumer
} = createContext()

//这里封装了一个CounterProvider，不然不方便管理状态，这里的状态相当于共享的，任何CounterProvider的后代组件都可以通过CounterConsumer来接收值
class CounterProvider extends Component {
    constructor(){
        super()
        this.state = {
            count:100,
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
            // 这里提供一个provider并且存在一个value，好传递里面的值跟参数或者方法
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

export {
    CounterProvider,
    CounterConsumer
}