/**
 * Created by Pranshu Panwar on 15-07-2017.
 */
const express = require('express');
const path = require('path');

let todos= [];

const app = express();

app.get('/',function(req,res,next){
    res.send('say hiii');
})


app.get('/greet',function(req,res,next){
    console.log(req.query);

    let name = req.query.name;
    res.send("Greeting to " + name);
})

app.get('/addtodo',function(req,res,next){
    todos.push(req.query.task);

    res.send(todos);
})
app.use('/public', express.static(path.join(__dirname,'public_statics')));

app.listen(8000, function(req,res,next){
    console.log(' Your server is running on http://localhost:8000')
})