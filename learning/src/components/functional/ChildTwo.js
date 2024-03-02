import React from 'react'

const ChildTwo = (props)=>{
    console.log(props)
    return <div>
        <button onClick={()=>props.buttonHandler('Child')}> Calling Child to Parent Handler</button>
    </div>
}

export default ChildTwo