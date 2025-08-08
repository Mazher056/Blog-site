const express = require("express")
const path = require("path")
const app = express();
const port = 80;
const mongoose = require("mongoose")
const userRouter = require('./Routes/user');
const cors = require("cors");
const blogRoute = require("./Routes/blog");



app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json()); // Add this to handle JSON requests
app.use(userRouter);
app.use(blogRoute);



mongoose.connect("mongodb://localhost:27017/blog").then(() => {
    console.log("Database Connected")
}).catch((e) => {
    console.log("Error while connecting" + e);
})

app.listen(port, () => {
    console.log("Server is Live");
})


app.get('/', (req, res) => {
    res.send("working1")
})

