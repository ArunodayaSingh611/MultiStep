import React from 'react';
import logo from "../assests/logo.png";
import "./stepform.css";
import Button from "@material-ui/core/Button";

const Contract = ({formData, setForm, navigation}) => {

    const {permanent,contractual} = formData;
    return (

    <main className="form-box">
          <div className="box">
                <div className="inner-box">
                    <div className="form-step">

                        <div className="logos">
                            <img id="logo-img" src={logo} alt="logo"/>
                        </div>     

                        <div  className="container">
                            <h3>How would you like to hire developers?</h3>

                            <label for="permanent">
                                <input type="radio" id="permanent" name="fav_language" 
                                value={permanent} onChange={setForm} />  Permanent Based
                            </label>
                            <label for="contractual">
                                <input type="radio" id="contractual" name="fav_language" 
                                value={contractual} onChange={setForm}/>  Contractual  Based
                            </label><br/>
                            <Button  className="gs-form" variant="contained" fullWidth color="primary" onClick={() => navigation.next()}> NEXT </Button>
                        </div>
                    </div>

                <div className="carsoul">
                    {/* <img id="logo-img" src={logo} alt="logo"/> */}
                </div>

            </div>
        </div>
    </main>
    )
}

export default Contract;