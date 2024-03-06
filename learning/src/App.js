import './App.css';
import Hello from './components/functional/hello'
import HelloC from './components/classes/HelloC'
import HelloJsx from './components/functional/hellojsx';
import PropsF from './components/functional/propsF';
import PropsC from './components/classes/propsC';
import StateC from './components/classes/StateC';
import SetStateC from './components/classes/SetStateC';
import PreviousSetState from './components/classes/PreviousSetState';
import DestructuringF from './components/functional/DestructuringF';
import DestructuringC from './components/classes/DestructuringC';
import ClickC from './components/classes/ClickC';
import ClickF from './components/functional/ClickF';
import ClickCBind from './components/classes/ClickCBind';
import ClickCArrow from './components/classes/ClickCArrow';
import ClickCBindTwo from './components/classes/ClickCBindTwo';
import ClickCArrowTwo from './components/classes/ClickCArrowTwo';
import Parent from './components/classes/Parent';
import ParentTwo from './components/classes/ParentTwo';
import IfElse from './components/classes/IfElse';
import IfElseTwo from './components/classes/IfElseTwo';
import IfElseThree from './components/classes/IfElseThree';
import IfElseFour from './components/classes/IfElseFour';
import For from './components/classes/For';
import ForTwo from './components/functional/ForTwo';
import ForTwoParent from './components/functional/ForTwoParent';
import Stylesheet from './components/functional/Stylesheet';
import StylesheetTwo from './components/functional/StylesheetTwo';
import './components/MystyleTwo.css'
import stylesheet from './components/MystyleModule.module.css'
import FormC from './components/classes/FormC';



function App() {
  return (
    <div className="App">

      <div> Hello World App </div>

      <Hello />
      <HelloC />
      <HelloJsx />

      <PropsF name="hello1" hero="bye1" />
      <PropsF name="hello2" hero="bye2" />
      <PropsF name="hello3" hero="bye3" > this text from inside tag content  </PropsF>
      <PropsF name="hello4" hero="bye4" > <button>Actions</button>  </PropsF>

      <PropsC name="helloC1" hero="bye1" />
      <PropsC name="helloC2" hero="bye2" />
      <PropsC name="helloC3" hero="bye3" > this text from inside tag content  </PropsC>
      <PropsC name="helloC4" hero="bye4" > <button>Actions</button>  </PropsC>

    

      <StateC />
      <SetStateC />
      <PreviousSetState />

      <DestructuringF name="hello1 destructuring function" hero="bye1" />
      <DestructuringC name="hello1 destructuring class" hero="bye1" />

       <ClickC />
       <ClickF />
      
      <ClickCBind />
      <ClickCArrow />
      <ClickCBindTwo />
      <ClickCArrowTwo />
      <Parent />
      <ParentTwo />
      <IfElse />
      <IfElseTwo />
      <IfElseThree />
      <IfElseFour />
      <For />
      <ForTwo />
      <ForTwoParent />
      <Stylesheet primary = {true}/>
      <StylesheetTwo />
      <h1 className='error'>regular stylesheet error</h1>
      <h1 className={stylesheet.success}>module stylesheet success</h1>
      <FormC />
    </div>
  );
}

export default App;
