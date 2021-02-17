import express from 'express';
import mysql from 'mysql';
// import bodyParser from 'body-parser';
import cors from 'cors';

const app=express();
const port =4000;

const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: "1q2w3e4r",
    database:"example"
})

con.connect();

app.use(cors());

app.get('/', (req,res) =>{
  res.send("test");
})

app.get('/custom', (req,res) =>{
   
   con.query("select customkeyword from testsample",
   function(err,rows,fields){
       if(err){
           console.warn('error');
       }else{
           console.log('success');
       };
    });
})

app.listen(port,()=>{
    console.log(`Connect at http://localhost:${port}`);
})
