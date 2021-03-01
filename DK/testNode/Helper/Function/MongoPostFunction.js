// importing schema
const { userModel } = require('../Function/Schema/MongoPostSchema');
// post user data
const addUser = (req, res) => {
    try{
      let newUser = new userModel(req.body);
      console.log(req.body)
      newUser.save().then(() => {
        res.send('success')
      }).catch( e => {
        res.status(400).send('Internal Server Error');
      });
    } catch(e) {
      res.status(400).send('Internal Server Error');
    }
}

module.exports = {
    addUser
}