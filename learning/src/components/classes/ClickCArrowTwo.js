import React,{Component} from "react";


class ClickCArrowTwo extends Component {

    constructor() {
        super()
        this.state ={
            message: 'Hello class Arrow Func TWo'
        }
    }


    buttonClick=()=>{
        console.log('Hello button class',this)
        this.setState({
            message: 'GoodBye class Arrow Func Two'
        })
    }

    render() {
        return( <div>
              <button onClick={this.buttonClick}>Click class Arrow Two</button>
               <h1>{this.state.message}</h1>
                      </div>)
    }
}

export default ClickCArrowTwo