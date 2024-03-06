import React, { Component } from 'react'

class FormC extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            skills: 'angular'
        }
    }
    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    changeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    changeSkills = (event) => {
        this.setState({
            skills: event.target.value
        })
    }
    changeSubmit = (event) => {
        alert(`form submitted ${this.state.name} ${this.state.address} ${this.state.skills}`)
        event.preventDefault();
    }
    render() {
        return (
            <div>


                <form onSubmit={this.changeSubmit}>
                    <div>
                        <label>Name</label>
                        <input value={this.state.name} onChange={this.changeName} />
                    </div>
                    <div>
                        <label>Address</label>
                        <input value={this.state.address} onChange={this.changeAddress} />
                    </div>
                    <div>
                        <label>Skills</label>
                        <select value={this.state.skills} onChange={this.changeSkills} >
                            <option value="angular">Angular</option>
                            <option value="React">React</option>
                            <option value="Javascript">Javascript</option>

                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormC