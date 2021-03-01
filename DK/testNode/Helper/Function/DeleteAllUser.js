// importing schema
const { userModel } = require('../Function/Schema/MongoPostSchema');
const { ObjectID } = require('mongodb');
// delete user function
const deleteAllUser = (req, res) => {
    console.log(req.params.id)
    try{
      userModel.deleteMany({},function(err,data){
          err&console.log("error",err)
          res.send(data)
      })
    } catch(e) {
      res.status(400).send('Internal Server Error');
    }
}

module.exports = {
    deleteAllUser
}