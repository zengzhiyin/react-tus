import React, { Component } from 'react'

export default class IconItem extends Component {
    render() {
        return (
            <>
                <li>
                    <img src={this.props.src} alt={this.props.alt}/>  
                    <p>{this.props.title}</p>
                </li>  
            </>
        )
    }
}
