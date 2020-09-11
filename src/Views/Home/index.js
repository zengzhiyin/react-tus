import React, { Component } from 'react'
import { IconList } from "./components";
import http from "./services";



export default class Home extends Component {
    componentDidMount() {
        http.get(http.apiUrl.IconList).then((data)=>{
            console.log(data)
        })
    }
    render() {
        return (
           <>
                <IconList/>
           </>
        )
    }
}
