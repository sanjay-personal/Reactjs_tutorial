import ForTwoChild from "./ForTwoChild";



function ForTwoParent() {
const persons = [{name:"hello1C",age:"21"},{name:"hello2C",age:"22"},{name:"hello3C",age:"23"}];
const person = persons.map(person=><ForTwoChild person={person}></ForTwoChild>)
return <div> {person} </div>
}
export default ForTwoParent