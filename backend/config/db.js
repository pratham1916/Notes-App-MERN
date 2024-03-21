const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb+srv://pratham11:pratham11@notes.zzuasw6.mongodb.net/Notes?retryWrites=true&w=majority&appName=Notes")

module.exports={
    connection
}