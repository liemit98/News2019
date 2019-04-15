var mongodb = require('mongodb').MongoClient;

var url = "mongodb+srv://liemtt:5Vr2aCvmVDUhQ6ty@cluster0-5yexi.mongodb.net/test?retryWrites=true";


const list = (req, res) => {
        mongodb.connect(url,{ useNewUrlParser : true}, function (err,client) {
            console.log("Ket noi db thanh cong");
            const collection =client.db("DataNews").collection("tb_news");
             collection.find({}).toArray(function(err,listPost){
                if (err) throw err;
                res.json(listPost); 
                });
            client.close();
        })
  }

const thoisu = (req, res) => {
    mongodb.connect(url,{ useNewUrlParser : true}, function (err,client) {
        console.log("Ket noi db thanh cong");
        const collection =client.db("DataNews").collection("tb_news");
         collection.find({TheLoai : 'ThoiSu'}).toArray(function(err,listPost){
            if (err) throw err;
            res.json(listPost); 
            });
        client.close();
    })
}

const phapluat = (req, res) => {
  mongodb.connect(url,{ useNewUrlParser : true}, function (err,client) {
      console.log("Ket noi db thanh cong");
      const collection =client.db("DataNews").collection("tb_news");
       collection.find({TheLoai:"PhapLuat"}).toArray(function(err,listPost){
          if (err) throw err;
          res.json(listPost); 
          });
      client.close();
  })
}

const dulich = (req, res) => {
  mongodb.connect(url,{ useNewUrlParser : true}, function (err,client) {
      console.log("Ket noi db thanh cong");
      const collection =client.db("DataNews").collection("tb_news");
       collection.find({TheLoai:'TheThao'}).toArray(function(err,listPost){
          if (err) throw err;
          res.json(listPost); 
          });
      client.close();   
  })
}

const threeItem = (req, res) => {
    mongodb.connect(url,{ useNewUrlParser : true}, function (err,client) {
        console.log("Ket noi db thanh cong");
        const collection =client.db("DataNews").collection("tb_news");
         collection.find({TheLoai:'ThoiSu'}).toArray(function(err,listPost){
            if (err) throw err;
            res.json(listPost); 
            });
        client.close();
    })
}

const tin = (req, res) => {
    mongodb.connect(url,{ useNewUrlParser : true}, function (err,client) {
        console.log("Ket noi db thanh cong");
        const collection =client.db("DataNews").collection("tb_news");
         collection.find({id: req.params.tua}).toArray(function(err,listPost){
            if (err) throw err;
            res.json(listPost); 
            });
        client.close();
    })
}

  module.exports = {
    list,
    threeItem,
    thoisu,
    phapluat,
    dulich,
    tin
}
  