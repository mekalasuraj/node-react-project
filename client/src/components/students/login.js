import React, {useEffect,useState} from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Formik, Form ,ErrorMessage, useField} from 'formik';
import * as Yup from 'yup';
import TextField from './textfield';

const Login = (props) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
      const [showError, setError] = useState(false);

      
    const onSTudentsDetailsCahnge=(e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onLoginFormSubmit = (e) => {
        e.preventDefault();
    
       axios.post('/api/users/auth/student',formData)
       .then(response=>{
        
        

         
           if(response.data.message === "record_found"){
            var decoded = jwt_decode(response.data.token);
            console.log(decoded);    
               setFormData({email: '',password: ''});
               sessionStorage.setItem('user',JSON.stringify(decoded))
               sessionStorage.setItem('token',response.data.token)
               window.location.href='/dashboard';
           } else if(response.data.message === "No_Matches"){
            setError(true);
           }
       })
      };

      const validate = Yup.object({
       
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(5, 'Password must be at least 5 charaters')
          .required('Password is required')
      })

  return (
    <>
     
     <div className="col-12">
         <div className="row">
             <div className="col-4"></div>
             <div className="col-4">
                 <h3 className="text-center mt-5 mb-5">Login</h3>
                 {/* {
                     showError &&
                     (<div className="err_msg mb-4">Invalid Credentials</div>)
                 }
                 
             <form onSubmit={onLoginFormSubmit}> 
                    <div className="form-outline">
                    <label className="form-label" htmlFor="typeEmail">Email</label>
                        <input type="email" id="typeEmail" name="email" value={formData.email} onChange={onSTudentsDetailsCahnge} className="form-control" required/>
                        
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typePassword">Password</label>
                        <input type="password" pattern=".{5,}" title="5 characters minimum" id="typePassword" name="password" value={formData.password} onChange={onSTudentsDetailsCahnge} className="form-control" required/>
                    </div>
            
                <button type="submit" className="btn btn-primary btn-block mb-3">Sign In</button>
            </form>
                <a href='/register' className="mt-3" style={{textDecoration:'underline'}}>Register</a> */}

<Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
        let formData ={email:values.email,password:values.password};
        axios.post('/api/users/auth/student',formData)
       .then(response=>{
           if(response.data.message === "record_found"){
            var decoded = jwt_decode(response.data.token);
            console.log(decoded);    
               setFormData({email: '',password: ''});
               sessionStorage.setItem('user',JSON.stringify(decoded))
               sessionStorage.setItem('token',response.data.token)
               window.location.href='/dashboard';
           } else if(response.data.message === "No_Matches"){
            setError(true);
           }
       })
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          {
                     showError &&
                     (<div className="err_msg mb-4">Invalid Credentials</div>)
                 }
          <Form>
          <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <button className="btn btn-primary btn-block mb-3" type="submit">Login</button>
            
          </Form>
          <a href='/register' className="mt-3" style={{textDecoration:'underline'}}>Register</a> 
        </div>
      )}
    </Formik>
             </div>
             <div className="col-4"></div>
         </div>
     
    
     </div>
     
    </>
  );
};



export default Login;

