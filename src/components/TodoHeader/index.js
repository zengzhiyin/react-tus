import React, { Component } from 'react'
import { Divider,Typography } from "antd";
import './index.css'

const { Title } = Typography;

export default class TodoHeader extends Component {
    render() {
        // console.log(this.props)
        return (
            <>
            <div className="title">
                <Title level={3}>{this.props.desc}</Title>
            </div>
            <Divider orientation="left">
                {this.props.children}
            </Divider>
            </>
        )
    }
}
