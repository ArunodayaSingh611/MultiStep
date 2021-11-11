import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import client1 from "./StepFrom/form-assests/client1.png";
import client2 from "./StepFrom/form-assests/client2.png";
import client3 from "./StepFrom/form-assests/client3.png";
import client4 from "./StepFrom/form-assests/client4.png";
import client5 from "./StepFrom/form-assests/client5.png";
import client6 from "./StepFrom/form-assests/client6.png";
import client7 from "./StepFrom/form-assests/client7.png";


const OwlCarsoul = () =>{

return(
        <OwlCarousel className='owl-theme' loop margin={7} nav>
                <div className='item'>
                    <img src={client1} alt="comapny1"/>
                </div>

                <div className='item'>
                    <img src={client2} alt="comapny2"/>
                </div>

                <div className='item'>
                    <img src={client3} alt="comapny3"/>
                </div>

                <div className='item'>
                    <img src={client4} alt="comapny4"/>
                </div>

                <div className='item'>
                    <img src={client5} alt="comapny5"/>
                </div>

                <div className='item'>
                    <img src={client6} alt="comapny6"/>
                </div>

                <div className='item'>
                    <img src={client7} alt="comapny7"/>
                </div>
        </OwlCarousel>
    )
}

export default OwlCarsoul;