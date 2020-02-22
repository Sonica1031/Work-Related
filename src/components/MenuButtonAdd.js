import React, { useState } from 'react';
import MenuButton from './MenuButton';

function MenuButtonAdd(){
const [titleValue, setTitleValue] = useState("")
const [showing, setShowing] = useState();

const Handler = e =>{
    e.preventDefault();
    setTitleValue(e.target.value);
}
const submit = (e) => {
e.preventDefault()
setShowing ([showing, <MenuButton title={titleValue}/>])
let button = document.querySelectorAll(".btn");
}
    return(
        <div>
        <input className="btn" placeholder="Enter Title" onChange={Handler} required />
        <button onClick={submit}>Add</button>
        {showing}
        </div>
    )
}

export default MenuButtonAdd;