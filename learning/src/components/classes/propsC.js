import React,{Component} from "react";


class PropsC extends Component {
    render() {
        console.log('class props', this)
        return <div>
              <h1>Hello Props {this.props.name} equal to {this.props.hero} </h1>
        <b>{this.props.children}</b>
        </div>
    }
}

export default PropsC