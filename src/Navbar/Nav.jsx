import React from "react";
import STYLE from "./Nav.module.css"

const Nav=()=>{
    return(
        <div className={STYLE.aa}>
<div>
    <img src="https://th.bing.com/th/id/OIP.tirBtX5RR2NxEil1NDf4nAHaE8?w=270&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
</div>

<div className={STYLE.dd}>
    <ul>
        <li>
            <a href="A">HOME</a>
        </li>
        <li>
            <a href="B">LOGIN</a>
        </li>
        <li>
            <a href="C">SIGNUP</a>
        </li>
        <li>
            <a href="D">ABOUT</a>
        </li>
    </ul>
</div>
        </div>
    )
}

export default Nav


