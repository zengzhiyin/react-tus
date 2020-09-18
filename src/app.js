import React, { Component } from 'react'
import { Counter, CounterBtn } from "./components";
import { CounterProvider } from "./counterStore";

export default class app extends Component {
    render() {
        return (
            <CounterProvider>
                <CounterBtn type="decrement">-</CounterBtn>
                <Counter/>
                <CounterBtn type="increment">+</CounterBtn>
            </CounterProvider>
        )
    }
}
