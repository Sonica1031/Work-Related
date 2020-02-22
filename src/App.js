import React from 'react';
import MenuButtonAdd from './components/MenuButtonAdd';
import './App.css';
import NavHook from './components/NavHook'

class App extends React.Component{
  constructor(){
    super();
  }
  render(){

    return(
      <div>
        <NavHook />
      <div className="Decoration">
        <form>
        <MenuButtonAdd />
        <button>Submit</button>
        </form>
        </div>
        </div>
    )
  }
}

export default App;
