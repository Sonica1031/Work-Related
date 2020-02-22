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
setShowing ([showing, <MenuButton title={titleValue} group={`${Date.now()}`}/>])
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