import React from 'react';
import "./stepForm1.css";
import {useForm, useStep} from 'react-hooks-helper';
import Roles from "./StepFrom/Roles";
import Experience from './StepFrom/Experience';
import Contract from './StepFrom/Contract';
import Submit from './StepFrom/Submit';
import Background from './Background';

const defaultData = {
    developerRole: "",
    permanent: "",
    contractual: "",
    experience: "",
    exp1:"",
    exp2:"",
    exp3:"",
    submit:""
}

const steps = [
    {
        id : "roles"
    },
    {
        id : "contract"
    },
    {
        id : "experience"
    },
    {
        id : "submit"
    },

]

const MultiStepForm = () => { 
    const[formData,setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep : 0
    });

    const props = {formData,setForm,navigation} 
    switch (step.id){
        case "roles":
            return <Roles {...props} />;
        case "contract":
            return <Contract {...props} />;
        case "experience":
            return <Experience {...props} />;
        case "submit":
            return <Submit />;
}

    return (
            <div>
                <Background/>
            </div> 
    )
}

export default MultiStepForm;
