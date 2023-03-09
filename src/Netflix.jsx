import React from "react";
import STYLE from "./Netflix.module.css"
const Netflix=()=>{
    return(
        <div className={STYLE.ab}>
<div>
    <img src="https://tse3.mm.bing.net/th?id=OIP.0BqPvfe7tNnck20G4VEDnwHaEj&pid=Api&P=0" alt="" />
</div>

<div className={STYLE.aa}>
    <ul>
        <li>
            <a href="A">SEARCH</a>
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
export default Netflix


