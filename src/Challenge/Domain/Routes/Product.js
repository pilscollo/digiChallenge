const express = require("express");
const ProductSchema = require("../Product");
const route= express.Router();

route.post("/product",(req,res)=>
{

    const product = ProductSchema(req.body);
    product.save().then((data)=>res.json(data)).catch((error)=>res.json({message:error}));

});

route.get("/product",(req,res)=>
{
     ProductSchema.find({"category.enable":true}).then((data)=>res.json(data)).catch((error)=>res.json({messade:error}));

});

module.exports=route;