exports.index = function(req, res){
    res.send("Welcome to cs");
}

exports.pilates = function(req, res){
	var video_id = req.query.v;
	res.render('hello', {id:video_id}, function(err, html){
		res.send(html);	
	})
}
