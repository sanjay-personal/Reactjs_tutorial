import React,{Component} from 'react'

class IfElseTwo extends Component {
    constructor() {
        super()
        this.state = {
            isLogged: true
        }
    }
    render() {
        let msg = '';
        if(this.state.isLogged) {
            msg = 'Hello Element variable'
        } else {
            msg = 'Bye Element Variable'
        }
        return <div>{msg}</div>
    }
}

export default IfElseTwo