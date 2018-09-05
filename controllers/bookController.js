var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

exports.index = (req, res) => {   
    
    async.parallel({
        book_count: (callback) => {
            Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: (callback) => {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: (callback) => {
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count: (callback) => {
            Author.countDocuments({}, callback);
        },
        genre_count: (callback) => {
            Genre.countDocuments({}, callback);
        },
    }, (err, results) => {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};








// exports.index = function(req, res) {
//     res.send('NOT IMPLEMENTED: Site Home Page');
// };


// all books FUNCTION
exports.book_list = function(req, res, next) {
    Book.find({}, 'title author')
    .populate('author')
    .exec (function(err, results) {
        if(err) {
            return next(err);
        }
        //if success
        res.render('book_list', { title: 'Book List', book_list: results})
    })
}

// book detail FUNCTION
exports.book_detail = function(req, res) {
    res.send('book detail:' + req.params.id);
}

