import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import data from "./database.js";
const app = express();
const port = 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.get("/",(req,res)=>{
    res.send(data);
})

app.listen(port ,()=>{

})

app.put("/add",(req,res) =>
data.push({
    id : data[data.length - 1].id + 1,
    name : req.body.name,
    age: req.body.age,
    country: req.body.country
}))
// .then((res) => res.json(res))