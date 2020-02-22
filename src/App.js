import React from 'react';
import MenuButtonAdd from './components/MenuButtonAdd';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
  }
  render(){

    return(
      <div className="Decoration">
        <form>
        <MenuButtonAdd />
        <button>Submit</button>
        </form>
        </div>
    )
  }
}

export default App;
