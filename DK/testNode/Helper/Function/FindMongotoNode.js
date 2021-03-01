//callback- function to connect mongo to node
const mongoToNode=(err, db)=>{
    if (err) throw err;
    var dbo = db.db("userData");
    dbo.collection("userDetails").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    })};
module.exports={
    mongoToNode
}