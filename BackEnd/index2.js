var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://liemtt:5Vr2aCvmVDUhQ6ty@cluster0-5yexi.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(err, client) {
    // const collection =client.db("DataNews").collection("tb_news");
    // collection.find({Tua : 'Con nuôi'}).toArray(function(err,res){
    //     if (err) throw err;
    //     console.log(res);       
    //     });
    // console.log(client);
});