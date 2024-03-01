import React,{Component} from "react";


class ClickCBindTwo extends Component {

    constructor() {
        super()
        this.state ={
            message: 'Hello class Bind Two'
        }
        this.buttonClickBind = this.buttonClickBind.bind(this) // offical react document choose this one or ClickCArrowTwo file
    }
   

    buttonClickBind() {
        console.log('Hello button class',this)
        this.setState({
            message: 'GoodBye class Bind Two'
        })
    }

    render() {
        return( <div>
              <button onClick={this.buttonClickBind}>Click class Bind Two</button>
               <h1>{this.state.message}</h1>
                      </div>)
    }
}

export default ClickCBindTwo