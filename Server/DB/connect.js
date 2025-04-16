import mongoose from "mongoose"; 

mongoose.connect("mongodb+srv://Rushikesh:t9IvT6JBGupQtXfo@waterdroptracker.ud92u.mongodb.net/db_waterdroptracker?retryWrites=true&w=majority&appName=WaterDropTracker").then(()=>{
    console.log("Connection of DB succesful")
}).catch((err)=>console.log(err));
