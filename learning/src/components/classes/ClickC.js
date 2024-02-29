import React,{Component} from "react";


class ClickC extends Component {
    buttonClick() {
        console.log('Hello button class')
    }
    render() {
        return <div>
              <button onClick={this.buttonClick}>Click class</button>
                      </div>
    }
}

export default ClickC