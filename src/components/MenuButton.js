import React from 'react';

function MenuButton(props){
  const Handler = (e) => {
    e.preventDefault()
    document.querySelector(".G"+props.group).remove();
      }

    return(
<form className={"G"+props.group} method="POST" action="/">
<p>{props.title}</p>
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

export default MenuButton;