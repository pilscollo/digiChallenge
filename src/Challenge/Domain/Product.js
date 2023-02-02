const mongoose= require("mongoose");


const productShema = mongoose.Schema(
    {
        price: Number,
        title: String,
        enable: Boolean,
        category: 
        {
            title : String,
            enable:Boolean
        }
    }
);

module.exports = mongoose.model("Product",productShema);