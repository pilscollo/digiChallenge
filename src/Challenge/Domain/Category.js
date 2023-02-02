const mongoose= require("mongoose");


const CategoryShema = mongoose.Schema(
    {
        title : String,
        enable:Boolean

    }
);

module.exports = mongoose.model("Category",CategoryShema);