import React from "react";

// without jsx below code(4 to 6th line)
// const HelloJsx = ()=>{
//     return <div id="hello" className="dummyclass"><h1>Hello JSX</h1> </div> 
// }

// with jsx below code
const HelloJsx = ()=>{
return React.createElement('div',{id:"hello",className:"dummyclass"},React.createElement('h1',null,'Hello JSX'))
}

export default HelloJsx