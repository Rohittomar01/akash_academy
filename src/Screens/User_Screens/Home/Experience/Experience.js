import React, { useContext } from "react";
import "./Experience.css";



const Experience= () => {

  return (
    <div className="experience" id='experience' style={{paddingTop:'10vh'}}>
      <div className="achievement" >
        {/* darkMode */}
        <div className="circle" >800+</div>
        <span  style={{color:"green",fontSize:20,fontFamily:"poppins"}}>Our</span>
        <span style={{fontSize:21,fontFamily:"poppins"}}>Students</span>
      </div>
      <div className="achievement">
        <div className="circle">2+</div>
        <span style={{color:"green",fontSize:20,fontFamily:"poppins"}}>Our Teaching</span>
        <span style={{fontSize:21,fontFamily:"poppins"}}> Year Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" >50+</div>
        <span  style={{color:"green",fontSize:20,fontFamily:"poppins"}}>Our</span>
        <span style={{fontSize:21,fontFamily:"poppins"}}>Faculty</span>
      </div>
    </div>
  );
};

export default Experience;
