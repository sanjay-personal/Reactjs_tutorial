import React,{Component} from 'react'

class LifeCycleBUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message:'Hello State Class'
        }
        console.log('LifeCycleBUpdate Constructor'); // 1st
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleBUpdate getDirevedStateFromProps'); // 2nd is call initally and again it call any update 5th

           return null
    }

    componentDidMount() {
        console.log('LifeCycleBUpdate componentDidMount'); // 4th order of calling logs

    }

    shouldComponentUpdate() {
        console.log('LifeCycleBUpdate shouldComponentUpdate'); // 6th order will be call any update is happened
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleBUpdate getSnapshotBeforeUpdate'); // 8th order will be call any update is happened
        return null

    }

    componentDidUpdate() {
        console.log('LifeCycleBUpdate componentDidUpdate'); // 9th order will be call any update is happened

    }
    updateState = ()=>{
        this.setState({
            message: 'Hello'
        })
    }

    render() {
        console.log('LifeCycleBUpdate render'); // 3rd is call initally and again it call any update 7th

        return (
        <div>
        <b>Hello child component update Mounting</b>
        <button onClick={this.updateState}>Call State</button>
        </div>
        )
    }
}

export default LifeCycleBUpdate