import React,{Component} from "react";
import Child from "../functional/Child";


class Parent extends Component {

    constructor() {
        super()
        this.state ={
            message: 'Parent'
        }
        this.buttonClickBind = this.buttonClickBind.bind(this) // offical react document choose this one or ClickCArrowTwo file
    }
   

    buttonClickBind() {
           alert(`Hello ${this.state.message}`);
    }

    render() {
        return( <div>
              <Child buttonHandler={this.buttonClickBind}/>
                      </div>)
    }
}

export default Parent