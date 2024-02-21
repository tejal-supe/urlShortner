import express from "express";
import { connect } from "./connection/connect.js";

const app = express();
const PORT = 8001;
connect();

app.listen(PORT,()=>{
console.log("Server is running!");
})