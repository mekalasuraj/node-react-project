const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { check, validationResult } = require('express-validator');

const connection = require('../../config/db');

router.post('/add/student',(req,res)=>{
 
  return new Promise(function (resolve, reject) {
    const salt =bcrypt.genSaltSync(2);
   const hashedPassword= bcrypt.hashSync(req.body.formData.password,salt);

  connection.query('insert into students (name,password,curr_std,email) values(?,?,?,?)',[req.body.formData.name,hashedPassword,parseInt(req.body.formData.curr_strd),req.body.formData.email] ,function (error, result) {
    if (error) throw error;

    insertMultiplerecords(req.body.prevData,result.insertId);
    resolve(res.json({"message":"Successfully_Inserted"}));
  });
  })
   
})

function insertMultiplerecords(data,id){
  data.forEach(item=>{
    connection.query(`insert into student_grades (student_id,standard,remark,percentage) values(?,?,?,?)`,[id,item.standard,item.remark,item.percentage],function(err,result){
      if(err) throw err;   
    })
  })
 }

router.post('/auth/student',(req,res)=>{
  
  connection.query('select id,name,email,password from students where email =?',[req.body.email] ,function (error, results) {
    if (error) throw error;
   
    
    if(results.length>0){
      const match =  bcrypt.compare(req.body.password, results[0].password);
     
      match.then(result=>{
        if(result){
          res.json({message:'record_found',userId:results[0].id,email:results[0].email,name:results[0].name});
        } else{
          res.json({message:'No_Matches'});
        }
      })
     
    } else{
      res.json({message:'No_Matches'});
    }
    
  });
 
});

router.get('/student/records/:id',(req,res)=>{
 
  connection.query('select standard,remark,percentage from student_grades where student_id =?',[req.params.id] ,function (error, results) {
    if (error) throw error;
   
    res.json({data:results});
  })
})

router.get('/sample/data',(req,res)=>{
 
  connection.query('SELECT * FROM sample_data WHERE id >= ? AND id <= ?',[1,20000] ,function (error, results) {
    if (error) throw error;
   
    res.json(results);
  })
})
module.exports = router;
