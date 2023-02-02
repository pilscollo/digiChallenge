
const express = require("express");
const { cat } = require("shelljs");
const CategorySchema = require("../Category");
const route= express.Router();

route.post("/category",(req,res)=>
{
    const category = CategorySchema(req.body);
    category.save();
});

route.get("/category",(req,res)=>
{
    CategorySchema.find().then((data)=>res.json(data)).catch((error)=>res.json({message: error}));
});

route.get("/category/:id",(req,res)=>
{
    const {id} = req.params;

    CategorySchema.findById(id).then((data)=> res.json(data)).catch((error)=> res.json({message: error}));
}
);

route.delete("/category/:id",(req,res)=>
{
const{id}= req.params;
CategorySchema.remove({_id:id}).then((data)=>res.json(data)).catch((error)=>res.json({message: error}));
});

route.put("/category/:id", (req,res)=>
{
    const {id} = req.params;
    const {title,enable} = req.body;

    CategorySchema.updateOne({_id:id},{$set:{title,enable}}).then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});


module.exports = route;

