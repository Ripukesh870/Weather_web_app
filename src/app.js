const express = require("express");
const path = require("path");
const hbs=require("hbs");
const app=express();
const port=process.env.PORT || 3000;

// public static path 
const staticPath = path.join(__dirname,"../public");
const tempPath=path.join(__dirname,"../temp/views");
const partials_path=path.join(__dirname,"../temp/partials");
app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",tempPath);
hbs.registerPartials(partials_path)


// routing
app.get("",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:"oops! page not found"
    });
})

app.listen(port,()=>{
    console.log(`listing to port no ${port}`);
})