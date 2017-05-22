var express=require('express');
var app=express();

var routes=require('./routes/route.js');

app.set('view engine','jade');

app.use(express.static(__dirname + '/public'));

app.get('/',routes.home);
app.get('/:hotel',routes.hotel);

var port = process.env.PORT || 8082;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});
module.exports = app;
