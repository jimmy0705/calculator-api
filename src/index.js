const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

// If the body parameters contain Strings then you need to give a message: "invalid data types"
// If the body parameters contain values above 10M(10 lakhs) then you need to give the message: "Overflow" 

// {
//     status: “success/failure/error”,
//     message: “the difference of given two number”,
//     sum:
//     } 

app.get('/', (req, res) => {
  
    res.send("hello world")

})

app.post('/add',(req,res)=>{
   let num1= req.body.num1;
   console.log(typeof num1)
   let num2 = req.body.num2;
   console.log(typeof num2)

   if (typeof(num1) ==="string" || typeof(num2) === "string"){
   // res.send("invalid data types");
   const data = 
    {
        status: "failure",
        message: "invalid data types",
        
        } 

   res.json(data)
}
else if(num1 >1000000 || num2 >1000000){

    const data = 
    {
        status: "error",
        message: "overflow"
        
        } 

   res.json(data)
}
else{
    
 const data = 
 {
     status: "error",
     message: "the sum of given two number",
     sum: num1+num2
     
     } 

res.json(data)
}

})

app.post('/sub',(req,res)=>{
    let num1= req.body.num1;
    console.log(typeof num1)
    let num2 = req.body.num2;
    console.log(typeof num2)
    if (typeof(num1) ==="string" || typeof(num2) === "string"){
        // res.send("invalid data types");
        const data = 
         {
             status: "failure",
             message: "invalid data types",
             
             } 
     
        res.json(data)
     }
     else if(num1 <1000000 || num2 <1000000){
     
         const data = 
         {
             status: "error",
             message: "Underflow"
             
             } 
     
        res.json(data)
     }
     else{
         
      const data = 
      {
          status: "error",
          message: "The difference of given two number",
          sum: num1-num2
          
          } 
     
     res.json(data)
     }
 })

 app.post('/multiply',(req,res)=>{
    let num1= req.body.num1;
   console.log(typeof num1)
   let num2 = req.body.num2;
   console.log(typeof num2)
   if (typeof(num1) ==="string" || typeof(num2) === "string"){
    // res.send("invalid data types");
    const data = 
     {
         status: "failure",
         message: "invalid data types",
         
         } 
 
    res.json(data)
 }
 else if(num1 >1000000 || num2 >1000000){
 
     const data = 
     {
         status: "error",
         message: "overflow"
         
         } 
 
    res.json(data)
 }
 else{
     
  const data = 
  {
      status: "error",
      message: "The product of given numbers",
      sum: num1*num2
      
      } 
 
 res.json(data)
 }
 })

 app.post('/division',(req,res)=>{
    let num1= req.body.num1;
   console.log(typeof num1)
   let num2 = req.body.num2;
   console.log(typeof num2)
   if (typeof(num1) ==="string" || typeof(num2) === "string"){
    // res.send("invalid data types");
    const data = 
     {
         status: "failure",
         message: "invalid data types",
         
         } 
 
    res.json(data)
 }
 else if(num2 ===0){
 
     const data = 
     {
         status: "error",
         message: "Cannot divide by zero"
         
         } 
 
    res.json(data)
 }
 else{
     
  const data = 
  {
      status: "error",
      message: "The division of given numbers",
      sum: num1/num2
      
      } 
 
 res.json(data)
 }
 })
 
 
 

// here


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

 module.exports = app;