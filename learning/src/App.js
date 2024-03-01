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
    </div>
  );
}

export default App;
