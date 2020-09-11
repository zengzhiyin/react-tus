import React, { Component } from 'react'
import IconItem  from "./IconItem";
export default class IconList extends Component {
    render() {
        return (
            <>
                <ul>
                    {
                        this.props.IconList.map(icon=>{
                            return  <IconItem key={icon.id} {...icon}/>
                        })
                    }
                </ul>  
            </>
        )
    }
}
