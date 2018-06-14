const express = require('express');

var app = express();

//middelware for ejs
app.set('view engine','ejs');
app.use('/assets',express.static('assets')); // name of the folder where my static files are (assets)



//basic home page routing
app.get('/',function(req,res){
  res.render('home');
});

app.get('/profile',function(req,res){
  res.render('profile');
})



var port = process.env.PORT || 3000;

app.listen(port,function(port){
  console.log("listening to port" + port);
});
