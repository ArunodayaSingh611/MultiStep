import React from 'react';
import logo from "../assests/logo.png";
import "./stepform.css";

const Submit = () => {
    return (

    <main className="form-box">
        <div className="box">

            <div className="inner-box">

                <div className="form-step">

                    <div className="logos">
                        <img id="logo-img" src={logo} alt="logo"/>
                    </div> 
                    
                    <div  className="container">
                        <h1>Thank You!!!</h1>
                    </div>
                </div>

                <div className="carsoul">
                {/* <img id="img" src={logo} alt="logo"/> */}
                </div>
                
            </div> 
            
        </div>
    </main>
    )
}

export default Submit;