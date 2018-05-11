const Book = require('../models/book');


exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};


// all books FUNCTION
exports.book_list = function(req, res) {
    res.send('book list'); 
}

// book detail FUNCTION
exports.book_detail = function(req, res) {
    res.send('book detail:' + req.params.id);
}

