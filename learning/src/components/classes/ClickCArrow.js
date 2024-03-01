import React,{Component} from "react";


class ClickCArrow extends Component {

    constructor() {
        super()
        this.state ={
            message: 'Hello class Arrow Func'
        }
    }


    buttonClickBind() {
        console.log('Hello button class',this)
        this.setState({
            message: 'GoodBye class Arrow Func'
        })
    }

    render() {
        return( <div>
              <button onClick={()=>this.buttonClickBind()}>Click class Arrow</button>
               <h1>{this.state.message}</h1>
                      </div>)
    }
}

export default ClickCArrow