// express is the server that forms part of the nodejs program
var express = require('express');
var https = require('https'); // used to create https services 
var fs = require('fs');   // fs = file system, to access files on the server
var app = express();
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});
// serve static files - e.g. html, css
app.use(express.static(__dirname));
var https = require('https');
var fs = require('fs');
var privateKey = fs.readFileSync('/home/studentuser/certs/client-key.pem').toString();
var certificate = fs.readFileSync('/home/studentuser/certs/client-cert.pem').toString();
var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(4441);
app.get('/', function (req, res) {
	// run some server-side code here - e.g. connect to a database and get data
  
	// console.log types information out to the terminal window (server)
	console.log('the https server has received a request'); 
	
	// res.send sends text out to the browser (client)
	res.send('Hello World - this is an https server');
});