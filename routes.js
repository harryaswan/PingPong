module.exports = function(app, express) {
	app.use('/game', express.static(__dirname + '/public'));

	app.get('/', function(request, response) {
	  response.redirect('/game');
	});

	var apiRouter = express.Router();
	apiRouter.get('/', function(req, res) {
		res.send('main route for api');
	});
	apiRouter.get('/:model/:id?', function(req, res) {
		res.send('api - model: ' + req.params.model + ' -- id: ' + req.params.id);
	});
	
	app.use('/api', apiRouter);
}