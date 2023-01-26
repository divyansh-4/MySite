import "./aboutcontStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
const Aboutcont = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I ?</h1>
        <p>Some text over here about yourself</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src= "data:image/png;base64,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" alt="ReactBottom"/>
          </div>
          <div className="img-stack bottom">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkqCr057IkZLC5OV0sP28CV_B9yPvD7bcWw&usqp=CAU" alt="ReactBottom"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcont