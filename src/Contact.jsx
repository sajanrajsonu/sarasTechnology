import React, { useState} from 'react';


const Contact = () => {
  const [data, setData] = useState ({
    fullname :"",
    phone : "",
    email : "",
    msg : "",
  });

  const InputEvent = (event) => {
    const {name,value} = event.target;
    setData ((preVal) => {
        return{
          ...preVal,
          [name]: value,          
        };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Your name is ${data.fullname} and mobile no. is ${data.phone}. and also your email is ${data.email}. Here is what you want to say ${data.msg}`)
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">


            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput" 
                        name ="fullname"
                        value = {data.fullname}
                        onChange = {InputEvent}
                        placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Contact No.</label>
                <input type="number" className="form-control" id="exampleFormControlInput" 
                        name ="phone"
                        value = {data.phone}
                        onChange = {InputEvent}
                        placeholder="Mobile no." />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput" 
                        name ="email"
                        value = {data.email}
                        onChange = {InputEvent}
                        placeholder="Enter your email address" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" classname="form-label">Messege</label>
                <textarea className="form-control" id="exampleFormControlTextarea" rows="3" 
                        name ="msg"
                        value = {data.msg}
                        onChange = {InputEvent}
                        ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-success mb-5 rounded-pill">Submit Form</button>
            </form>


          </div>
        </div>
      </div>
      
    </>
  );
};
export default Contact;  