import './App.css';
import React,{Component} from 'react';
import Aiforpic from './Components/Aiforpic.js';
import GPSlocation from './Components/GPS';


class App extends Component {

 
  render() {
    
    return(
      <div >
        <GPSlocation/>
        <Aiforpic/>
      </div>
    );
  }

}

export default App;
