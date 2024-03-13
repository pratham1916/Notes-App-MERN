const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { noteRouter } = require("./routes/note.routes");
require("dotenv").config();


const app = express();
app.use(express.json());
app.use("/users",userRouter)
app.use("/notes",noteRouter)


app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log(`Database is Connected`);
        console.log(`Server is running on PORT ${process.env.PORT}`);
    } 
    catch (error) {
        console.log(error   );
    }
    
})