const express = require('express');
const router = express.Router();


// require controller modules
const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const book_instance_controller = require('../controllers/bookinstanceController');




/// The routes are defined either using .get() or .post() methods on the router object. All the paths are defined using strings (we don't use string patterns or regular expressions). Routes that act on some specific resource (e.g. book) use path parameters to get the object id from the URL.




/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', book_controller.index);


// GET request for one Book.
router.get('/book/:id', book_controller.book_detail);

// GET request for list of all Book items.
router.get('/books', book_controller.book_list);





/// AUTHOR ROUTES ///

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail);

// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);





/// GENRE ROUTES ///

// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list);




/// BOOKINSTANCE ROUTES ///

// GET request for one BookInstance.
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', book_instance_controller.bookinstance_list);






module.exports = router;