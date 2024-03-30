const express = require("express");
const app = express();
const { todo} = require("./db");

app.use(express.json());



app.post("/todos", async function(req, res){
    const createPayload = req.body;
    const parsedpayload = createTodo.safeParse(createPayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg: "you sent the wrong input"
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: flase
    })
    res.json({
        msg: "todo created"
    })


})
app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    console.log(todos) //promise
    res.json({
        todos
    })


})

app.put("/complete",async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(441).json({
            msg: "you sent the wrong input",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res,json({
        msg: " Todo marked as completed"
    })


})