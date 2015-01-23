var express = require('express')
var app = express();

app.get('/search', function (req, res) {
	var obj = {results : req.query.results, include_tabs : req.query.include_tabs};
	res.send(obj);
})

app.listen(process.argv[2]);