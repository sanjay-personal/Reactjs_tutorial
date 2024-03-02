import React from 'react'

const Child = (props)=>{
    console.log(props)
    return <div>
        <button onClick={props.buttonHandler}> Calling Parent to Child Handler</button>
    </div>
}

export default Child