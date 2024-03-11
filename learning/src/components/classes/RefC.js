import React,{Component} from 'react'

class RefC extends Component {
    constructor() {
        super();
       this.inputRef = React.createRef()
    }

    componentDidMount() {
        console.log("this.inputRef",this.inputRef)
        this.inputRef.current.focus()
    }

    handlerClick =()=>{
       alert(this.inputRef.current.value);
       this.inputRef.current.value = ''
       this.inputRef.current.focus()

    }
   
    render() {
        return (
        <div>
            <h1>Below input is Ref on focus</h1>
        <input ref={this.inputRef} />
        <button onClick={this.handlerClick}>Input Capture</button>
        </div>
        )
    }
}

export default RefC