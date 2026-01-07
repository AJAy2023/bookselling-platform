//  book Schema  
const  mongoose = require("mongoose");
const  bookSchema  =  new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    bookname:{
        type:String,
        required:true
    },
    authorname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    publicationDate:{
        type:String
    }
});

module.exports =  mongoose.model("BOOK",  bookSchema);