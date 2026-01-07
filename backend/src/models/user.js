const  mongoose =  require("mongoose");
const userSchema =  new  mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        max:10,
        min:2
    },
    isverified:{
        type:Boolean,
        default:false,
    },
    role:{
        type:String,
        enum:['admin' , 'user'],
        default:'user'
    },
    cart:{
        type:String
    },
    address:{
        type:String
    }
},{timestamps:true});


module.exports = mongoose.model("User", userSchema);
//  userSchema  
