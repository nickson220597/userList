// defining post function
const postFunction=(req,res)=>{
    console.log(req.body)
    res.send("received")
}
module.exports={
    postFunction
}