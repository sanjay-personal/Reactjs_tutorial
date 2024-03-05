import ForTwoChild from "./ForTwoChild";



function ForTwoParent() {
const persons = [{name:"hello1C",age:"21"},{name:"hello2C",age:"22"},{name:"hello3C",age:"23"}];
// note we cant use key attribute in child component. if we add key attribute with will not throw error  like unique
const person = persons.map(person=><ForTwoChild key={person.age} person={person}></ForTwoChild>)
return <div> {person} </div>
}
export default ForTwoParent