import express from "express";
import { connect } from "./connection/connect.js";

const app = express();
const PORT = 8001;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
connect();

app.listen(PORT,()=>{
console.log("Server is running!");
})