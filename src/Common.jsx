import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div className = "container-fluid">
          <div className = "row">
            <div className = "col-10 mx-auto">
              <div className = "row">
                <div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name} <strong className = "brand-name">Saras Technology</strong>.</h1> 
                  <h2 className = "my-3 fs-6">We are the team of talented developer making wbsites.</h2>
                  <div className = "mt-3">
                    <NavLink to ={props.visit} className = "btn-get-started mb-5">{props.btname}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-2 order-lg-2 header-img ">
                  <img src ={props.imgsrc} className = "imf-fluid animated " alt = "Common_img" width="500px" height="500px"/>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section> 
    </>  
  );
};
export default Common;