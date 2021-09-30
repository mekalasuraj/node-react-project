const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const faker = require('faker');
const fs = require('fs');
const { check, validationResult } = require('express-validator');

const connection = require('../../config/db');


// SignUp api
router.post('/add/student',(req,res)=>{
 
  return new Promise(function (resolve, reject) {
    const salt =bcrypt.genSaltSync(2);
   const hashedPassword= bcrypt.hashSync(req.body.formData.password,salt);

  connection.query('insert into students (name,password,curr_std,email) values(?,?,?,?)',[req.body.formData.name,hashedPassword,parseInt(req.body.formData.curr_strd),req.body.formData.email] ,function (error, result) {
    if (error) throw error;

    insertMultiplerecords(req.body.prevData,result.insertId)
    .then(response=>{
      if(response === 'success'){
        const payload = {
          user: {
            id:result.insertId,
            email:req.body.formData.email,
            name:req.body.formData.name
          }
        };
        jwt.sign(payload,'verifytoken',(err, token) => {
            if (err) throw err;
            // res.json({ token ,message:'record_found'});
            resolve(res.json({token,"message":"Successfully_Inserted"}));
          }
        );
        
      }
    })
    
  });
  })
   
})

 function insertMultiplerecords(data,id){

  return new Promise((resolve,reject)=>{
    data.forEach(item=>{
      connection.query(`insert into student_grades (student_id,standard,remark,percentage) values(?,?,?,?)`,[id,item.standard,item.remark,item.percentage],function(err,result){
        if(err) throw err;
        resolve('success');   
      })
    })
  })
 }

//  Login API
router.post('/auth/student',(req,res)=>{

  connection.query('select id,name,email,password from students where email =?',[req.body.email] ,function (error, results) {
    if (error) throw error;
   
    
    if(results.length>0){
      const match =  bcrypt.compare(req.body.password, results[0].password);
     
      match.then(result=>{
        if(result){
          
            const payload = {
              user: {
                id:results[0].id,
                email:results[0].email,
                name:results[0].name
              }
            };
            jwt.sign(payload,'verifytoken',(err, token) => {
                if (err) throw err;
                res.json({ token ,message:'record_found'});
              }
            );
          
        } else{
          res.json({message:'No_Matches'});
        }
      })
     
    } else{
      res.json({message:'No_Matches'});
    }
    
  });
 
});

// API to get student Grades by student Id
router.get('/student/records/:id',auth,(req,res)=>{
 
  connection.query('select standard,remark,percentage from student_grades where student_id =?',[req.params.id] ,function (error, results) {
    if (error) throw error;
   
    res.json({data:results});
  })
})


 function loopStudents(){

  return new Promise((resolve,reject)=>{
    let data=[];

for(let i=0;i<20000;i++){

  let firstName = faker.name.firstName(); 
  let lastName = faker.name.lastName();
  let mobile = faker.phone.phoneNumber(); 
  let email = faker.internet.email();

    data.push([firstName,lastName,mobile,email]);
}

var sql = "INSERT INTO students_data (first_name,last_name,mobile,email) VALUES ?";

 connection.query(sql, [data], function(err) {
     if (err) throw err;
    
     resolve('success2');
 });


  })
}

router.get('/add/file/sample_data',async (req,res)=>{
 
  console.log('start');
  loopStudents()
  .then(response=>{
  console.log('data');
    res.json('success');
  })
  

  console.log('end');
  
})

// API TO GET 20k Records
router.get('/get/student/data',async (req,res)=>{
 return new Promise((resolve,reject)=>{
   connection.query('SELECT * FROM students_data WHERE id >= ? AND id <= ?',[1,20000],(err,data)=>{
     if(err) throw err;

     resolve(res.json(data))
   })
 })
})


module.exports = router;
