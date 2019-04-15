var mongodb = require('mongodb').MongoClient;

var url = "mongodb+srv://liemtt:5Vr2aCvmVDUhQ6ty@cluster0-5yexi.mongodb.net/test?retryWrites=true";


const list = (req, res) => {
    User.find((err, users) => {
        mongodb.connect(url,{ useNewUrlParser : true}, function (err,client) {
            console.log("Ket noi db thanh cong");
            const collection =client.db("DataNews").collection("tb_news");
             collection.find({}).toArray(function(err,listPost){
                if (err) throw err;
                res.json(listPost)  
                });
        })
    }).select('thanh cong list')
  }

export default {
    list
}
  