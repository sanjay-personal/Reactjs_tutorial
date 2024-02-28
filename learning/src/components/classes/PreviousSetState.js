import React, { Component } from 'react'

class PreviousSetState extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    increment() {
        this.setState((prevstate,props)=>({
            counter: prevstate.counter + 1
        }))

        console.log('Async count', this.state.counter)
    }

    changeMsg() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
    render() {
        return (
            <div>
                <div>
                    {this.state.counter}

                    <button onClick={() => this.changeMsg()}>Count</button>
                </div>
            </div>
        )
    }
}

export default PreviousSetState