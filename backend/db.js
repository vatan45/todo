const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vatanmalik04:Vm45%407856@cluster0.mybzgxr.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports ={
    todo
}