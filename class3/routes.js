module.exports = function(app){
    var handlers = require('./handlers');
    app.get('/', handlers.index);
	app.get('/pilates', handlers.pilates);
}
