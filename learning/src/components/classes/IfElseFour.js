import React,{Component} from 'react'

class IfElseFour extends Component {
    constructor() {
        super()
        this.state = {
            isLogged: true
        }
    }
    render() {

        return this.state.isLogged && <div>Hello short Circuit Operator</div> 
    }
}

export default IfElseFour