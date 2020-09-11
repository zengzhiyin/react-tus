import React, { useState, useEffect }from 'react'
const { Button } = require("antd")

const Counter = () => {
    const [ count, setCount] = useState(20)
    useEffect(()=>{ //类似与componentdidmount，每次改变组件，都会出发这个函数
        console.log('更新了')
    })
    return (
        <>
            <Button onClick={()=>{setCount(count - 1 )}}>
                -
            </Button>
            <span>{count}</span>
            <Button onClick={()=>{setCount(count + 1)}}>
                +
            </Button>
        </>
    )
}
export default Counter