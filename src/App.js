import './App.css';
import React,{Component} from 'react';
import Aiforpic from './Components/Aiforpic.js';


class App extends Component {

  state = {

    Imagefromuser: null,
    Equipmentfromuser: " "
  }
  aiforpicHandler1 = (event) => {
    this.setState({
      Equipmentfromuser: event.target.value 
      
    })
  }
  aiforpicHandler2 = (event) => {
      this.setState({
        Imagefromuser: event.target.files[0] 
        
      })
  }
  
  render() {

    return(
      <div className="App">
      <Aiforpic  Img={this.state.Imagefromuser} Eq={this.state.Equipmentfromuser} changed1={this.aiforpicHandler1} changed2={this.aiforpicHandler2} /> 
      </div>
    );
  }

}

export default App;
