import React from 'react';
import web from "../src/Images/lptp.jpg";
import Common from './Common'

const About = () => {
  return (
    <>
      <Common name = "Let's know about the" 
              imgsrc={web} 
              visit="/contact" 
              btname="Contact Now"/>
    </>
  );
};  
export default About;