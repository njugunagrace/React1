import React from "react";
import './style.css';
import {AiFillCar} from 'react-icons/ai';


const Introduction=()=>{
  const message = "This is my first variable";  

    return(
      <div>
        <h1 className="heading">What I learnt in React</h1>
        <p>React is a JavaScript library</p>
        <img src="https://res.cloudinary.com/ddlhjo10n/image/upload/v1688058634/cld-sample-3.jpg"></img>
        <AiFillCar/>
        <h2 onClick={()=> alert("you have clicked the message!")}>{message}</h2>

     
          <div className="contact-card">
          <img src="https://res.cloudinary.com/ddlhjo10n/image/upload/v1688058619/samples/animals/kitten-playing.gif" />
          <div className="user-details">
            <p>Name: Jenny Han</p>
            <p>Email: Jenny.Han@notreal.com</p>
            <p>Age: 25</p>
          </div>
          <button>Delete</button>
        </div>
        </div>
      
    )
}
export default Introduction;