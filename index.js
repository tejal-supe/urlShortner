import express from "express";
import cors from "cors";
import { connect } from "./connection/connect.js";
import router from "./router/index.js";
import { redirectDirectly } from "./controller/index.js";

const PORT = 8001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connect();

app.use("/api/v1/url", router);
app.get("/:shortId",redirectDirectly) // called the get request here bcoz we have to have request on '/' and not '/api/v1/url'
 
app.listen(PORT, () => {
  console.log("Server is running!");
});
