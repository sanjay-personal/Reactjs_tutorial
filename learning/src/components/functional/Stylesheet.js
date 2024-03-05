// import {React} from 'react'
import '../../components/Mystyle.css'

let Stylesheet = (props)=>{ 
    let classes = props.primary ? 'primary': ''
   return <h1 className={`${classes} fontSize`}>Stylesheet added Classes</h1>
}

export default Stylesheet