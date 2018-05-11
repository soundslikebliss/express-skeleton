const Genre = require('../models/genre');



// all genres FUNCTION
exports.genre_list = function(req, res) {
    res.send('genre list');
}

// genre detail FUNCTION
exports.genre_detail = function(req, res) {
    res.send('genre detail:' + req.params.id);
}

