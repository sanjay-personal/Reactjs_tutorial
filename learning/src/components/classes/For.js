import React,{Component} from 'react'

class For extends Component {
    constructor() {
        super()

    }
    render() {
        // const names = ['Hello1','Hello2','Hello3'];
        // return <div>{names.map(name=><h1>{name}</h1>)}</div> 

        const names = ['Hello1','Hello2','Hello3'];
        const name = names.map(name=><h1 key={name}>{name}</h1>)
        return <div>{name}</div>
    }
}

export default For