import React,{Component} from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message:'Hello State Class'
        }
        console.log('LifeCycleB Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDirevedStateFromProps');

           return null
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount');

    }

    render() {
        console.log('LifeCycleB render');

        return (
        <div>
        <b>Hello child component Mounting</b>
        </div>
        )
    }
}

export default LifeCycleB