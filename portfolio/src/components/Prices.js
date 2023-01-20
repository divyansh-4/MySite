import "./pricesStyles.css"
import React from 'react'
import { Link } from "react-router-dom"


const Prices = () => {
  return (
    <div className="prices">
      <div className="card-cont">
        <div className="card">
          <h3>-Basic-</h3>
            <span className="bar"></span>
            <p className="btc">100</p>
            <p>3 Days</p>
            <p>3 Projects</p>
            <p>Designs</p>
            <Link to="/contact" className="btn">Purhase Now</Link> 

        </div>
        <div className="card">
          <h3>-Business-</h3>
            <span className="bar"></span>
            <p className="btc">200</p>
            <p>20 Days</p>
            <p>10 Projects</p>
            <p>Designs</p>
            <Link to="/contact" className="btn">Purhase Now</Link> 
                        
        </div>
        <div className="card">
          <h3>-Professional-</h3>
            <span className="bar"></span>
            <p className="btc">500</p>
            <p>50 Days</p>
            <p>20 Projects</p>
            <p>Designs</p>
            <Link to="/contact" className="btn">Purhase Now</Link> 
                        
        </div>

      </div>
    </div>
  )
}

export default Prices