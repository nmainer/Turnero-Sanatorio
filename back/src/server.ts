import express from "express";
import routerIndex from "./Routes/indexRouter";
import cors from "cors";
import morgan from "morgan";



const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(routerIndex);



export default app 