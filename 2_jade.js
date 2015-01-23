/*  #####################################################################
  ##                          ~~  JADE  ~~                           ##
  #####################################################################

Create an Express.js app with a home page (/home) rendered by jade template engine, 
that shows current date (toDateString).
*/

var express = require('express'),
	app = express(),
	path = require('path');

app.set('views', path.join(__dirname, 'template'));

app.set('view engine', 'jade');

app.get('/home', function (req, res){

	console.log(process.argv[3]);
	res.render(process.argv[3] + '/index', {date : new Date().toDateString()});
});

app.listen(process.argv[2]);	