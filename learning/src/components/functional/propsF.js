import React from 'react'

const propsF = (props)=>{
    console.log(props)
    return <div>
        <h1>Hello Props {props.name} equal to {props.hero} </h1>
        <b>{props.children}</b>
    </div>
}

export default propsF