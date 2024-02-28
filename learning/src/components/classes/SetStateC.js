import React, { Component } from 'react'

class SetStateC extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    changeMsg() {
        this.setState(
            {
                counter: this.state.counter + 1
            },()=>{
        console.log('sync count', this.state.counter)

            }

        )

        console.log('Async count', this.state.counter)
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

export default SetStateC