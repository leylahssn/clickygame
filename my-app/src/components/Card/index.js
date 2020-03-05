import React from "react";
import "./style.css";

function Card(props) {
    return (
        <button onClick={()=>props.selected(props.id)} id={props.id}>
        <div className="card" >
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        </div>
        </button>
  );
           
       
    
}

export default Card;