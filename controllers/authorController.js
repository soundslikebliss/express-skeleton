const Author = require('../models/author');



// all authors FUNCTION
exports.author_list = function(req, res) {
    res.send('all authors');
}

// author detail FUNCTION
exports.author_detail = function(req, res) {
    res.send('author detail:' + req.params.id);
}

