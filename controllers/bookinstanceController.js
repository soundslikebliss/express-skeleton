const BookInstance = require('../models/bookinstance');



// all bookinstance FUNCTION
exports.bookinstance_list = function(req, res, next) {
    
    BookInstance.find()
        .populate('book')
        .exec(function(err, results) {
            if(err) {
                return next(err);
            }
            //on success
            res.render('bookinstance_list', {title: 'Book Instance List', bookinstance_list: results});
        });
}



// bookinstance detail FUNCTION
exports.bookinstance_detail = function(req, res) {
    res.send('book instance detail:' + req.params.id);
}

