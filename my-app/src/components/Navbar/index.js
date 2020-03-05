import React from "react";
import "./style.css";

function Navbar(props) {
    return (<div className="navbar">
        <ul>
            <li class="brand"><a href="/">Clicky Game</a>
            </li>
            <li class="">Click an image to begin!
            </li>
            <li>Score: {props.score} | Top Score: {props.topScore}

            </li>
        </ul>
    </div>);
}

export default Navbar;
