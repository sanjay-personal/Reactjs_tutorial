import React,{Component} from 'react'

class IfElse extends Component {
    constructor() {
        super()
        this.state = {
            isLogged: false
        }
    }
//    IF ELSE WILL NOT IN INSIDE THE DIV TAG BECAUSE JSX WILL NOT ALLOW LIKE THAT.
    render() {
        if(this.state.isLogged) {
        return (
        <div>
        Hello IF
        </div>
        )
        } else  {
        return (
            <div>
            Hello Else
            </div>
            )
        }
    }
}

export default IfElse