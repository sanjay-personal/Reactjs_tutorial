


function ForTwo() {
const persons = [{name:"hello1",age:"21"},{name:"hello2",age:"22"},{name:"hello3",age:"23"}];
const person = persons.map(person=><h1>{person.name} age is {person.age}</h1>)
return <div> {person} </div>
}
export default ForTwo