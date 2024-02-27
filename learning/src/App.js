import './App.css';
import Hello from './components/functional/hello'
import HelloC from './components/classes/HelloC'
import HelloJsx from './components/functional/hellojsx';
import PropsF from './components/functional/propsF';


function App() {
  return (
    <div className="App">
      
         <div> Hello World App </div>
        
      <Hello />
      <HelloC />
      <HelloJsx />

      <PropsF name="hello1" hero="bye1" />
      <PropsF name="hello2" hero="bye2"/>
      <PropsF name="hello3" hero="bye3" > this text from inside tag content  </PropsF>
      <PropsF name="hello4" hero="bye4" > <button>Actions</button>  </PropsF>



    </div>
  );
}

export default App;
