import "./FooterStyles.css"
import React from 'react'
import { FaGit, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <p><FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    IIIT Delhi, New Delhi</p>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        +91 9334808488
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        divyansh.72003@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Myself</h4>
                <p>I am second year CSE undergrad and hopeful to turn into a grad(Laughing Emoji)</p>
                <div className="social">
                    <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                    <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                    <FaGit size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer