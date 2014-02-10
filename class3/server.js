var express = require("express")
, path = require('path');
var app = express();


require('./routes')(app);
app.use(express.static(path.normalize(__dirname) + '/public'))
app.use(express.errorHandler());
app.configure(function(){
	app.use(express.logger('dev'));
	app.use(express.bodyParser());	
})

app.set('views', path.normalize(__dirname) + '/public');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
var port = 8000;
app.listen(8000);
console.log("App listening on port: " + port);
