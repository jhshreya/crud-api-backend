const express =require('express')
const mongoose=require('mongoose')
const Product=require('./models/product.model.js')
const app=express()
const productRoute=require('./routes/product.route.js')
app.use(express.json());

app.use('/api/product',productRoute);

app.get('/',(req,res)=>{
    return res.json(" home")
});

//app.post('/api/product',(req,res)=>{
  //  console.log(req.body);
   //r//eturn res.json(req.body);
//});



mongoose.connect("mongodb+srv://shreyajha1903:IHZXtJh1TDqvJovt@cluster0.fi209ka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log(" WOWWWW !!!connected to database ")
    app.listen(3000, ()=>{
        console.log("server is listening on port 3000");
    }) 
}).catch(()=>{
    console.log("error in connecting to database")
})