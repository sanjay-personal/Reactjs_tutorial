import React,{Component} from 'react'
import LifeCycleBUpdate from './LifeCycleBUpdate';

class LifeCycleAUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message:'Hello State Class'
        }
        console.log('LifeCycleAUpdate Constructor'); // 1st
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleAUpdate getDirevedStateFromProps'); // 2nd is call initally and again it call any update 5th

           return null
    }

    componentDidMount() {
        console.log('LifeCycleAUpdate componentDidMount'); // 4th order of calling logs

    }

    shouldComponentUpdate() {
        console.log('LifeCycleAUpdate shouldComponentUpdate'); // 6th order will be call any update is happened
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleAUpdate getSnapshotBeforeUpdate'); // 8th order will be call any update is happened
        return null

    }

    componentDidUpdate() {
        console.log('LifeCycleAUpdate componentDidUpdate'); // 9th order will be call any update is happened

    }
    

    render() {
        console.log('LifeCycleAUpdate render'); // 3rd is call initally and again it call any update 7th

        return (
        <div>
        <b>Hello component update Mounting</b>
        <LifeCycleBUpdate  />
        </div>
        )
    }
}

export default LifeCycleAUpdate