import React,{Component} from "react";


class ClickCBind extends Component {

    constructor() {
        super()
        this.state ={
            message: 'Hello class Bind'
        }
    }
    // below method not call 'this'
    buttonClick() {
        console.log('Hello button class',this)
    }
    // below method  call 'this' because passing from 'this' using bind syntax

    buttonClickBind() {
        console.log('Hello button class',this)
        this.setState({
            message: 'GoodBye class Bind'
        })
    }

    render() {
        return( <div>
              <button onClick={this.buttonClick}>Click class this</button>
              <button onClick={this.buttonClickBind.bind(this)}>Click class Bind</button>
               <h1>{this.state.message}</h1>
                      </div>)
    }
}

export default ClickCBind