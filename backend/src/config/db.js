
const  mongoose   = require("mongoose");
const dbconnection  =  async (req, res)=>{
    try{
         await  mongoose.connect(process.env.MONGO_URL)

         console.log("mongo db is connected");
    }catch(err)
    {
        console.error(err);
    }
}


module.exports = dbconnection;


