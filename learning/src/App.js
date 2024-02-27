import './App.css';
import Hello from './components/functional/hello'
import HelloC from './components/classes/HelloC'
import HelloJsx from './components/functional/hellojsx';


function App() {
  return (
    <div className="App">
      
         <div> Hello World App </div>
        
      <Hello />
      <HelloC />
      <HelloJsx />

    </div>
  );
}

export default App;
