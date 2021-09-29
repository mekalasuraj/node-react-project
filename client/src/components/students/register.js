import React, {useState} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const Register = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        curr_strd: ''
      });
    
    const [inputData,setInputData]= useState([]); 


    const onSTudentsDetailsCahnge=(e)=>{
      
        let data=[];
        if(e.target.name === 'curr_strd'){
            let count =parseInt(e.target.value);
           
            for(let i=0;i< count-1;i++){
                
                data.push({id:uuidv4(),standard:'',remark:'',percentage:''});
            }
            setInputData(data);
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
       
       axios.post('/api/users/add/student',{
           formData,
           prevData:inputData
        })
       .then(response=>{
          
           if(response.data.message === "Successfully_Inserted"){
               window.location.href='/login'
               
           }
       })
      };

      const onDynamicInputChange=(id,event)=>{
        setInputData({ ...inputData, [event.target.name]: event.target.value });
        const newInputFields = inputData.map(i => {
            if(id === i.id) {
              i[event.target.name] = event.target.value
            }
            return i;
          })
          
          setInputData(newInputFields);
    }

  return (
    <div>
     
     <div className="col-12">
         <div className="row">
             <div className="col-4"></div>
             <div className="col-4">
                 <h3 className="text-center mt-5 mb-5">Register</h3>
             <form onSubmit={onFormSubmit}>
                    <div className="form-outline">
                    <label className="form-label" htmlFor="formControlLg">Name</label>
                        <input type="text" id="formControlLg" name="name" value={formData.name} onChange={onSTudentsDetailsCahnge} className="form-control form-control-lg" required/>
                       
                    </div>

                    <div className="form-outline">
                    <label className="form-label" htmlFor="typeEmail">Email</label>
                        <input type="email" id="typeEmail" name="email" value={formData.email} onChange={onSTudentsDetailsCahnge} className="form-control" required/>
                        
                    </div>

                    <div className="form-outline">
                    <label className="form-label" htmlFor="typePassword">Password</label>
                        <input type="password" pattern=".{5,}" title="5 characters minimum" id="typePassword" name="password" value={formData.password} onChange={onSTudentsDetailsCahnge} className="form-control" required/>
                        
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typePhone">Current Standard</label>
                <input type="number" id="typePhone" name="curr_strd" value={formData.curr_strd} onChange={onSTudentsDetailsCahnge} className="form-control" min="1" max="10" required/>
            
                </div>
            
                <div className="form-outline mb-4">
                    {/* {renderInputs(formData.curr_strd)} */}

                    {
                        inputData.length<= 10 &&
                        (
                            inputData.map((item,i)=>(
                                <div className="row mb-3" key={item.id}>
                      <div className="col-4">
                      <input type="text" id="formControlLg1" name='standard' onChange={event => onDynamicInputChange(item.id, event)} className="form-control form-control-lg" placeholder="standard" required/>
                      </div>
                      <div className="col-4">
                      <input type="text" id="formControlLg2" name='remark' onChange={event => onDynamicInputChange(item.id, event)} className="form-control form-control-lg" placeholder='remark' required/>
                      </div>
                      <div className="col-4">
                      <input type="text" id="formControlLg3" name='percentage' onChange={event => onDynamicInputChange(item.id, event)} className="form-control form-control-lg" placeholder='percentage' required/>
                      </div>
                  </div>
                        )    
                        ))
                    }
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-3" >Sign Up</button>
            </form>
            <a href='/login' className="mt-3" style={{textDecoration:'underline'}}>Login</a>
             </div>
             <div className="col-4"></div>
         </div>
     
     </div>
     
    </div>
  );
};



export default Register;

