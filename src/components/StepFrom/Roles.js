import React from 'react';
//import Container from '@material-ui/core/Container';
//import client1 from "./form-assests/client1.png"
import TextField from '@material-ui/core/TextField';
import logo from "../assests/logo.png";
import blue from "../StepFrom/form-assests/blue.png";
import black from "../StepFrom/form-assests/black.png"
import white from "../StepFrom/form-assests/white.png"
import "./stepform.css";
import Button from "@material-ui/core/Button";
// import OwlCarsoul from '../Owlcarsoul';

const Roles = ({ formData, setForm, navigation}) => {
    const {roles} = formData;
    console.log(roles);

    return (  
        <main className="form-box">
          <div className="box">

            <div className="inner-box">

                <div className="form-step">

                    <div className="logos">
                        <img id="logo-img" src={logo} alt="logo"/>
                    </div> 
                    
                    <div className="head1">
                        <h3>Let's Get Started</h3>
                    </div>
                    
                    <div  className="container">
                        <h3>What role you would like to hire?</h3>
                        <TextField name="roles" value={roles} onChange={setForm} placeholder="e.g. Full-Stack,Frontend,Backend"
                        margin="normal" variant="outlined" autoComplete="off" fullWidth/> 
                        <Button  className="gs-form" variant="contained" fullWidth color="primary"  onClick={() => navigation.next()}>NEXT</Button>
                    </div>
                </div>

                <div className="carsoul">

                    {/* <div className="img-comp">
                            <img src={client1}/>
                    </div> */}

                    <div className="img-wrap">
                        <img src={white} className="img img-one" alt="carsoul-1"/> 
                        <img src={blue} className="img img-two" alt="carsoul-2"/>
                        <img src={black} className="img img-three" alt="carsoul-3"/>
                        {/* <OwlCarsoul/> */}

                    </div>

                <div className="text-slider">

                    <div className="text-wrap">
                        <div className="text-group">
                            <h2>Our Leading Companies</h2>
                            <h2>Discover Yourself</h2>
                        </div>
                    </div>

                    <div className="bullets">
                        <span className="active" data-value="1"></span>
                        <span  data-value="2"></span>
                        <span  data-value="3"></span>
                    </div>   
                </div>

                </div>
            </div> 
        </div>
    </main>
    );
};

export default Roles;
