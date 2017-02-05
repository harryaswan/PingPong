module.exports = function(app) {
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

	var apiRouter = express.Router();
	apiRouter.get('/', function(req, res) {
		res.send('main route for api');
	});
	apiRouter.get('/:model/:id?', function(req, res) {
		res.send('api - model: ' + req.params.model + ' -- id: ' + req.params.id);
	});
	
	app.use('/api', apiRouter);
}