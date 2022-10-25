const express=require('express')
const app =express();
const port =process.env.PORT|| 5000;

app.get('/',(req,res)=>{
    res.send('programming api running')
});

app.listen(port,()=>{
    console.log('programming point server running on port:',port);
})