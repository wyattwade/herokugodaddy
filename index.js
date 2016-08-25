var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// allow these static directories to be used 

app.use("/img", express.static(__dirname + '/img'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/vendor", express.static(__dirname + '/vendor'));
app.use("/views", express.static(__dirname + '/views'));




app.get('/', function(request, response) {
  response.render('../index1');
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


