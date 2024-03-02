import React,{Component} from "react";
import ChildTwo from "../functional/ChildTwo";


class ParentTwo extends Component {

    constructor() {
        super()
        this.buttonClickBind = this.buttonClickBind.bind(this) // offical react document choose this one or ClickCArrowTwo file
    }
   

    buttonClickBind(ChildName) {
           alert(`Hello ${ChildName}`);
    }

    render() {
        return( <div>
              <ChildTwo buttonHandler={this.buttonClickBind}/>
                      </div>)
    }
}

export default ParentTwo