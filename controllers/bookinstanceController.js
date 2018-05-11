const BookInstance = require('../models/bookinstance');



// all bookinstance FUNCTION
exports.bookinstance_list = function(req, res) {
    res.send('all book instances');
}

// bookinstance detail FUNCTION
exports.bookinstance_detail = function(req, res) {
    res.send('book instance detail:' + req.params.id);
}

