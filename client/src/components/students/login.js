import React, {useState} from 'react';
import axios from 'axios';


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
               setFormData({email: '',password: ''});
               let dataObj={userId:response.data.userId,email:response.data.email,name:response.data.name}
               sessionStorage.setItem('user',JSON.stringify(dataObj))
               window.location.href='/dashboard';
           } else if(response.data.message === "No_Matches"){
            setError(true);
           }
       })
      };

  return (
    <div>
     
     <div className="col-12">
         <div className="row">
             <div className="col-4"></div>
             <div className="col-4">
                 <h3 className="text-center mt-5 mb-5">Login</h3>
                 {
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
                <a href='/register' className="mt-3" style={{textDecoration:'underline'}}>Register</a>
             </div>
             <div className="col-4"></div>
         </div>
     
     </div>
     
    </div>
  );
};



export default Login;

