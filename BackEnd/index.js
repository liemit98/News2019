var mongodb = require('mongodb').MongoClient;

var url = "mongodb+srv://liemtt:5Vr2aCvmVDUhQ6ty@cluster0-5yexi.mongodb.net/test?retryWrites=true";

// mongodb.connect(url,{ useNewUrlParser: true});

// var db = mongodb.connection;
mongodb.connect(url,{ useNewUrlParser : true}, function (err,client) {
    console.log("Ket noi db thanh cong");
    const collection =client.db("DataNews").collection("tb_news");
    var data = {
        Tua: "quan kaki",
        MoTa: "Neeeeeeeeeeeeeeeeeeeeee",
        TheLoai: "1",
        NoiDung: "quan ao",
        HinhAnh:"http://streaming1.danviet.vn/upload/3-2015/images/2015-08-19/1439951398-2.jpg",
        id:'18'
    }
    collection.insertOne(data, function (err,res) {
        //neu xay ra loi
        if (err) throw err;
        //neu khong co loi
        console.log('Them thanh cong');
    });
    client.close();
})



