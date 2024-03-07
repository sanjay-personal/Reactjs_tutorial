import React,{Component} from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message:'Hello State Class'
        }
        console.log('LifeCycleA Constructor'); // 1st
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDirevedStateFromProps'); // 2nd

           return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount'); // 4th order of calling logs

    }

    render() {
        console.log('LifeCycleA render'); // 3rd

        return (
        <div>
        <b>Hello component Mounting</b>
        <LifeCycleB  />
        </div>
        )
    }
}

export default LifeCycleA