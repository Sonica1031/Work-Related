import React, { useState } from 'react';

function MenuButtonAdd(){

const [titleValue, setTitleValue] = useState("")
const [showing, setShowing] = useState([]);

    function MenuButton(){
        const Handler = (e) => {
          e.preventDefault()
          let index = showing.findIndex(i => i.id === showing.id)
                setShowing(showing.splice(index));
            }
      
          return(
      <form id={`.G${Date.now()}`}>
      <p>{titleValue}</p>
        <input type="radio" id={Date.now() + "-yes"} name={`${Date.now()}`} value="yes" required={true}/>
        <label for="Menu-Item-1">Yes</label>
        <input type="radio" id={Date.now() + "-no"} name={`${Date.now()}`} value="no"/>
        <label for="Menu-Item-1">No</label>
        <input type="radio" id={Date.now() + "sometimes"} name={`${Date.now()}`} value="sometimes"/>
        <label for="Menu-Item-1">Sometimes</label>
        <div>
          <input type="text" placeholder="Any other comments" />
        </div>
        <button onClick={Handler}>Remove</button>
      </form>
          )
      }

const Handler = e =>{
    e.preventDefault();
    setTitleValue(e.target.value);
}
const submit = (e) => {
    e.preventDefault()
    setShowing ([showing, MenuButton()])
    localStorage.setItem('showing', showing);
}
    return(
        <div>
        <div className="InnerFormDecor">
        <input className="btn" placeholder="Enter Title" onChange={Handler} required />
        <button className="btnAdd" onClick={submit}>Add</button>
        </div>
        {showing}
        </div>
    )
}

export default MenuButtonAdd;