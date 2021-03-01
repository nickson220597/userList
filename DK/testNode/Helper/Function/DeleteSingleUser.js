// importing schema
const { userModel } = require('../Function/Schema/MongoPostSchema');
const { ObjectID } = require('mongodb');
const{getUser}=require('../Function/MongoGetFunction')
// delete user function
const deleteSingleUser = (req, res) => {
    console.log(req.params.id)
    try{
      userModel.deleteOne({"_id": ObjectID(req.params.id)},function(err,data){
          err&console.log("error",err)
          res.send(data)
      })
    } catch(e) {
      res.status(400).send('Internal Server Error');
    }
    getUser
}

module.exports = {
    deleteSingleUser
}