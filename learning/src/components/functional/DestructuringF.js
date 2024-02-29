import React from 'react'

const DestructuringF = (props)=>{
    console.log(props)
    const {name, hero} = props
    return <div>
        <h1>Hello Props {name} equal to {hero} </h1>
        <b>{props.children}</b>
    </div>
}

export default DestructuringF