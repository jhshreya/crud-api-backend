
const Product=require('../models/product.model')

const post=async(req,res)=>{
    try{
      const product=await Product.create(req.body);
      res.status(200).json(product);
      }
      catch(error){
          return res.status(500).json({message:"something went wrong"})
      }
  }

  const getone =async(req,res)=>{
    try{
       const product=await Product.find({});
       res.status(200).json(product)
    }
    catch(error){
        return res.status(500).json({message:"something wrong"})
    }
}

const gettwo=async(req,res)=>{
    try{
     const {id} =req.params;
     const product= await Product.findById(id);
     res.status(200).json(product)
    }
    catch{
        return res.status(500).json({message:"something wrong"})
    }
}

const update =async(req,res)=>{
    try{
       const {id}=req.params;
       const product= await Product.findByIdAndUpdate(id,req.body);
       if(!product){
        return res.status(404).json({message:"product not found"})
       }
       const update=await Product.findById(id);
       res.status(200).json(update);
    }
    catch{
        return res.status(500).json({message:"something wrong"})
    }

}

const deletenow = async(req,res)=>{
    try{
      const {id}=req.params;
      const product=await Product.findByIdAndDelete(id)
      if(!product){
        return res.status(404).json({message:"product not found"});
      }
      res.status(200).json("deleted successfully");
    }
    catch{
        return res.status(500).json({message:"something wrong"})
    }
}

module.exports ={
   post, getone,gettwo,update,deletenow
}