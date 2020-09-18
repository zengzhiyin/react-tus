import React, { Component,Fragment } from 'react'
import { Button } from "antd";
import {CounterConsumer} from "../../counterStore";
export default class index extends Component {
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
