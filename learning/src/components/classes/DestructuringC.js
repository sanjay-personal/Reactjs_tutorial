import React,{Component} from "react";


class DestructuringC extends Component {
    render() {
        console.log('class props', this)
        const {name, hero} = this.props
        return <div>
              <h1>Hello Props {name} equal to {hero} </h1>
        <b>{this.props.children}</b>
        </div>
    }
}

export default DestructuringC