import React from "react";
const Hero = () =>{
    return (
    <div
    className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column"
    style={{height:"45vh",width:"100%"}}>
        <ul>
            <li style={{fontSize:"20px",}}>Know your world.</li>
            <li style={{fontSize:"20px",color:"red"}}>Make your dailies informative.</li>
            <li style={{fontSize:"20px",}}>Because you deserve nothing but the truth.</li>
            <li style={{fontSize:"20px",color:"red"}}>Do not pay for paid news.</li>
            <li style={{fontSize:"20px",}}>Spreading knowledge.</li>
        </ul>
    </div>
    );
};
export default Hero;