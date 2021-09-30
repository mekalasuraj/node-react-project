import React, {useState, useEffect } from 'react';
import axios from 'axios';



const Dashboard = (props) => {
    const [studentData, setStudentData] = useState([]);

    let data=sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')):'';
    let token=sessionStorage.getItem('token') ? sessionStorage.getItem('token'):'';
    useEffect(()=>{
        axios.get(`/api/users/student/records/${data.user.id}`,{
          headers:{
            "x-auth-token":token
          }
        })
        .then(response=>{
         
            setStudentData(response.data.data)
        });
    },[])

    const onLogoutClick =(e)=>{
        e.preventDefault();
        sessionStorage.removeItem('user');
        window.location.href='/login'
    }
    
  return (
    <div>
     
     <div className="col-12">
         <div className="row">
             <div className="col-4">
             
             </div>
             <div className="col-4">
                 <h3 className="text-center mt-5 mb-5">{data.user.name} Profile DashBoard</h3>
       
                 <table className="table table-striped table-hover">
        
        <thead>
          <tr>
            <th scope="col">#Id</th>
            <th scope="col">Standard</th>
            <th scope="col">Remark</th>
            <th scope="col">Percentage</th>
            
          </tr>
        </thead>
        <tbody>
        
        {
            studentData.map((item,i)=>(
                <tr key={i}>
            <th scope="row">{i+1}</th>
            <td>{item.standard}'th</td>
            <td>{item.remark}</td>
           
            <td>{item.percentage}%</td>
            
          </tr>
            ))
        }
        
          
          
        </tbody>
      </table>
             </div>
             <div className="col-4">
             <p className="mt-3" ><a onClick={onLogoutClick} style={{textDecoration:'underline',color:'rgb(41, 178, 223)'}}>Log Out</a></p>
             </div>
         </div>
     
     </div>
     
    </div>
  );
};



export default Dashboard;

