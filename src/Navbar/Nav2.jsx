import React from "react";
import STYLE from "./Nav2.module.css"

const Nav2=()=>{
    return(
        <div className={STYLE.aa}>
<div>
    <img src="https://tse1.mm.bing.net/th?id=OIP.n2Z38gAF9ju_CFhrjJ0DCgHaEK&pid=Api&P=0" alt="" />
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
export default Nav2