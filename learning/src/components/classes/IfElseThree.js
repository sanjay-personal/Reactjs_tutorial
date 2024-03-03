import React,{Component} from 'react'

class IfElseThree extends Component {
    constructor() {
        super()
        this.state = {
            isLogged: false
        }
    }
    render() {

        return this.state.isLogged ? <div>Hello Ternary Operator</div> : <div>Bye Ternary Operator</div>
    }
}

export default IfElseThree