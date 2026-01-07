const  Book  =  require("../models/book");
// add book 
const  addBook  = async (req, res)=>{
    try
    {
        const {bookname, authorname,price,description, category, publicationDate} = req.body;
        if(!bookname || !authorname, !price || !description||! category ||!publicationDate )
        {
            return res.status(400).json({
                success:false,
                message:"Please all the  colums"
            });
        }

        //  check the  book exit or  not  with the  same name  
        const existingBook  =  await Book.findOne({bookname : bookname});
        if(existingBook)
        {
            return res.status(400).json({
                success:false,
                message:"Already this name  book exist"
            });
        }

        // if  not the  create the  book
        
        const newBook =  await  Book.create({
            bookname,
            authorname,
             price,
            description,
           category,
           publicationDate
        })


        // return the  result  
        return res.status(201).json({
            success:true,
            message:"Book is  added on platfrom",
            data:{
                _id:newBook._id,
                bookname:newBook.bookname,
                author:newBook.authorname
            }
        });
    }catch(err)
    {
        return res.status(500).json({
            success:false,
            message:'Internal server error',
            error:err.message
        });
    }
}
//  view  book  
const  viewBook  = async  (req, res)=>{

    try
    {
    const {id}  =  req.params;

    // find the  book 
        const findbook  =  await Book.findById(id);
        if(!findbook)
        {
            return res.status(404).json({
                success:false,
                message:"book not  found"
            });
        }
    //  if there  give show the  book
     return res.status(200).json({
        success:true,
        message:'successfully featched book data',
        data:findbook
     });  
    }catch(err)
    {
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        });
    }
}
//  get  book  
const getBook  =  async (req, res)=>{
    try
    {
        const  {id} = req.params;

        // find the  book  
        const findBook  =  await Book.findById(id);
        if(!findBook)
        {
            return res.status(404).json({
                success:false,
                message:"Book not  found"
            });
        }
        //  if foud give the  book
        return res.status(200).json({
            success:true,
            message:'successfully featch book data',
            data:{
                findBook
            }
        })
    }catch(err)
    {
        return res.status(500).json({
            success:false,
            meesage:"Internal server error"
        });
    }
}
//  remove  the  book  
const  removeBook  = async (req, res)=>{
    try
    {
        const {id} =  req.params
        // find the  book  
        const findBook   =  await Book.findByIdAndDelete(id);
        if(!findBook)
        {
            return res.status(404).json({
                success:false,
                message:'book not  found'
            });
        }
        return res.status(200).json({
            success:true,
            message:"Book deleted from  platfrom",
            data:{findBook}
        })
    }catch(err)
    {
        return res.status(500).json({
            success:false,
            message:'Internals server error'
        });
    }
}
//  update the  book  
const  updateBook  =  async (req, res)=>{
    try
    {
        const {id} =  req.body;
        const  findBook  = await  Book.findByIdAndUpdate(id, 
            {$set:req.body},
            {new:true});
            if(!findBook)
            {
                return res.status(404).json({
                    success:false,
                    message:'book not  found'
                });
            }
            return res.status(200).json({
                success:false,
                message:'Book updated successfully',
                data:{findBook}
            })
    }catch(err) 
    {
        return res.status(500).json({
            success:false,
            message:'Internal server error'
        });
    }
}



module.exports ={addBook, viewBook,getBook,removeBook,updateBook};