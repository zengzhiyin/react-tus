import React, { Component } from 'react'

export default class Like extends Component {
    constructor(){
        super()
        this.state = {
            isLiked:false
        }
    }
    handleLikedClick = () =>{
        // 修改state参数状态需要使用setState函数
        // 可以使用对象修改的方式也可以使用传入一个方法的方式
        // this.setState({
        //     isLiked:!this.state.isLiked
        // })
        this.setState((prevState,props)=>{
            // console.log(props)
            // setstate是异步的操作，由于是异步的操作，所以setstate存在第二个参数
            // console.log('这是内部的state：'+this.state.isLiked)
            return {
                isLiked:!prevState.isLiked
            }
        },()=>{
            //这里可以获取state的最新状态
            // console.log('这是内部的state：'+this.state.isLiked)
        })
    }
    render() {
        return (
            <div>
                <span onClick={this.handleLikedClick}>
                    {this.state.isLiked?'取消💗' : '喜欢🖤'}
                </span>
            </div>
        )
    }
}
