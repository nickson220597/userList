// express
const express = require('express'); 
// port
var port=3013
// cors
const cors = require('cors')
// mongoose
const mongoose=require('mongoose')
// body-parser
const bodyParser = require('body-parser');
// importing function
const {addUser}=require('../testNode/Helper/Function/MongoPostFunction')
const {getUser}=require('../testNode/Helper/Function/MongoGetFunction')
const {deleteSingleUser}=require('../testNode/Helper/Function/DeleteSingleUser')
const {deleteAllUser}=require('../testNode/Helper/Function/DeleteAllUser')
const {editSingleUser}=require('../testNode/Helper/Function/EditSingleUser')

const {getSearchUser}=require( '../testNode/Helper/Function/SearchUserList')

// app use
const app = express();  
app.use(cors()) 
app.use(bodyParser.json());
// local mongodb url
const mongoConnectionUrl = "mongodb://localhost:27017/userData";
// mongoose connect
mongoose.connect(mongoConnectionUrl);

app.post('/addusers', addUser);
app.get('/getuserlist', getUser);
app.get('/searchUserlist/:id', getSearchUser);
app.delete('/getuserlist/delete/:id', deleteSingleUser);

app.get('/getuserlist/edit/:id', editSingleUser);
app.delete('/getuserlist/deleteall', deleteAllUser);


// connect backend
app.listen(port, function () {  
    console.log("Server initailized")  
  })  

