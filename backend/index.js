const express = require("express");
const app = express();

app.use(express.json());



app.post("/todos", function(req, res){
    const createPayload = req.body;
    const parsedpayload = createTodo.safeParse(createPayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg: "you sent the wrong input"
        })
        return;
    }
    //put it in mongodb


})
app.get("/todos", function(req, res){


})

app.put("/complete", function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(441).json({
            msg: "you sent the wrong input",
        })
        return;
    }


})