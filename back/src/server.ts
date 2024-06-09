import express from "express";
import routerIndex from "./Routes/indexRouter";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";



const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(routerIndex);



export default app 