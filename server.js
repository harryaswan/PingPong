var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.redirect('/game');
});

var gameRouter = express.Router();
gameRouter.get('/', function(req, res) {
	res.send('main route for game');
});
gameRouter.get('/play', function(req, res) {
	res.send('play route');
});
gameRouter.get('/play/:id/:id2', function(req, res) {
	res.send('play with id1: ' + req.params.id + ' & id2: ' + req.params.id2);
});

app.use('/game', gameRouter);








app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});