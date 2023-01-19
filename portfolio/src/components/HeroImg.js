import "./HeroImgStyles.css";
import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80" alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hey there, Im a FREELANCER</p>
            <h1> Software Engineer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>


            </div>
        </div>
    </div>
  )
}

export default HeroImg