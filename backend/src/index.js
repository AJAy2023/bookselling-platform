const express =  require("express");
const app  = express();
require("dotenv").config();
const dbconnection =  require("./config/db");
dbconnection();
const book =  require("./routers/addbookRoutes");
const PORT = process.env.PORT || 4000

app.use(express.json());
app.get('/', (req, res)=>{
    res.send("hello word !");    
})

app.use('/api', book);
app.listen(PORT, ()=>{
    console.log(`the server is  running  on the port : ${PORT}`);
});