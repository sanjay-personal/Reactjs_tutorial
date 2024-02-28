import React,{Component} from 'react'

class StateC extends Component {
    constructor() {
        super()
        this.state = {
            message:'Hello State Class'
        }
    }
    changeMsg() {
        this.setState({
            message: 'Thank You State Class'
        })
    }
    render() {
        return (
        <div>{this.state.message}
        
        <button onClick={()=>this.changeMsg()}>State Change Msg</button>
        </div>
        )
    }
}

export default StateC