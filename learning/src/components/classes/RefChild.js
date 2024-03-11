import React,{Component} from 'react'

class RefChild extends Component {
    constructor() {
        super();
       this.inputRefChild = React.createRef()
    }

    inputFocusChild() {
        console.log("inputRef child",this.inputRefChild)
        this.inputRefChild.current.focus()
    }


   
    render() {
        return (
        <div>
        <input ref={this.inputRefChild} />
        </div>
        )
    }
}

export default RefChild