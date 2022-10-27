const express=require('express')
const cors=require('cors');
const app =express();
const port =process.env.PORT|| 5000;

app.use(cors());

const courses=require('./data/courses/courses.json');

app.get('/',(req,res)=>{
    res.send('programming api running')
});
app.get('/courses', (req, res) => {
    res.send(courses)
});
app.get('/course/:id', (req,res)=>{
    const id=req.params.id;
    const selectedCourse=courses.find(course=>course.id==id);
    res.send(selectedCourse);
})

app.listen(port,()=>{
    console.log('programming point server running on port:',port);
})