import React, {useState} from 'react';


function NavHook(){
    const [pageTitle, setPageTitle] = useState("");
    const [navBar, setNavBar] = useState([]);
const Handler = e =>{
    e.preventDefault();
    setPageTitle(e.target.value);
    }
const onClickHandler = e =>{
    e.preventDefault();
    return(
    setNavBar([navBar, <a href={`/${pageTitle}.html`}>{pageTitle}</a>])
    )
}
    return(
    <div>
    <form>
    <input onChange={Handler} type="text" placeholder="Enter Page Name"/>
    <div onClick={onClickHandler}>+</div>
    </form>
    {navBar}
    </div>
    )
}
export default NavHook;