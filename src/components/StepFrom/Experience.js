import React from 'react';
import logo from "../assests/logo.png";
import "./stepform.css";
import Button from "@material-ui/core/Button";


const Experience = ({formData, setForm, navigation}) => {

    const {exp1,exp2,exp3} = formData;
    return (
        <main className="form-box">
        <div className="box">
            <div className="inner-box">

                <div className="Form-Step">
                    <div className="logos">
                        <img id="logo-img" src={logo} alt="logo"/>
                    </div>     

                    <div  className="container">
                    <p>Enter The Required Experience:</p>
                       
                        <label for="age1">
                            <input type="radio" id="exp1" name="exp" value={exp1} onChange={setForm}/>  0 - 3 years
                        </label>
                        <label for="age2">
                            <input type="radio" id="exp2" name="exp" value={exp2} onChange={setForm}/>  3 - 6 years
                        </label>
                        <label for="age3">
                            <input type="radio" id="exp3" name="exp" value={exp3} onChange={setForm}/>  6 - 10 years
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

export default Experience;