import React from 'react'

const ClickF = (props)=>{
  function  buttonClick() {
        console.log('click function')
    }
    return <div>
        <button onClick={buttonClick}>Click function</button>
    </div>
}

export default ClickF