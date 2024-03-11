import React,{Component} from 'react'
import RefChild from './RefChild';

class RefParent extends Component {
    constructor() {
        super();
       this.inputParentRef = React.createRef()
    }


    handlerClick =()=>{
       this.inputParentRef.current.inputFocusChild()

    }

   
    render() {
        return (
        <div>
            <h1>Below input is focus parent to child</h1>
            <RefChild ref={this.inputParentRef} />
        <button onClick={this.handlerClick}>Input Focus</button>
        </div>
        )
    }
}

export default RefParent