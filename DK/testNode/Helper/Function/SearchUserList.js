// importing schema
const { userModel } = require('../Function/Schema/MongoPostSchema');
// objectId install
const { ObjectID } = require('mongodb');
const a=""
// getting data function
const getSearchUser = (req, res) => {
    console.log(req.params.id)
    try{
      userModel.find({"firsrName":req.params.id},function(err,data){
          err&console.log("error",err)
          req.params.id?res.send(data): a
      })
    } catch(e) {
      res.status(400).send('Internal Server Error');
    }
}

module.exports = {
    getSearchUser
}