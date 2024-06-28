const express=require('express')
const Product=require('../models/product.model')
const router=express.Router()
const {post,getone,gettwo,update,deletenow}= require('../controller/product')


router.post('/', post)
  
 router.get('/',getone)
  
  router.get('/:id',gettwo)
  
  //UPDATE
  router.put('/:id',update)
  
  //delete
  
  router.delete('/:id',deletenow)
   module.exports= router;