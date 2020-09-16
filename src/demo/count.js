import React, { Component } from 'react'

export default class count extends Component {
    render() {
        return (
            <>
              <span>{this.props.children}</span>  
            </>
        )
    }
}
