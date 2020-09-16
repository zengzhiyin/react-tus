import React, { Component } from 'react'
const { Button } = require("antd")


export default class countBtn extends Component {
    render() {
        return (
            <>
            <Button >
                {this.props.children}
            </Button>
            </>
        )
    }
}
