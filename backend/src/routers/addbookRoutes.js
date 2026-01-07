
const express =  require("express");
const router  =  express.Router();
const  {addBook, viewBook,getBook,removeBook,updateBook} =  require("../controllers/bookController");



router.post('/addBook', addBook);
router.get('/getBook/:id', getBook);
router.get('/viewBook/:id', viewBook);
router.delete('/removeBook',removeBook);
router.put('/updateBook',updateBook);



module.exports = router;


