// importing schema
const { userModel } = require('../Function/Schema/MongoPostSchema');
// getting data function
const getUser = (req, res) => {
    try{
      userModel.find({},function(err,data){
          err&console.log("error",err)
          res.send(data)
          // console.log(data)
      })
    } catch(e) {
      res.status(400).send('Internal Server Error');
    }
}

module.exports = {
    getUser
}