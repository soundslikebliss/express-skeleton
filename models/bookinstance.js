const mongoose = require('mongoose');
const moment = require('moment');


const Schema = mongoose.Schema;


const BookInstanceSchema = new Schema(
    {
        book: {
            type: Schema.ObjectId,
            ref: 'Book',
            required: true
        },
        imprint: {
            type: String,
            required: true
        },
        status: {
            type: String, 
            required: true, 
            enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], 
            // enum: This allows us to set the allowed values of a string. In this case we use it to specify the availability status of our books (using an enum means that we can prevent mis-spellings and arbitrary values for our status)
            default: 'Maintenance'
        },
        due_back: {
            type: Date, 
            default: Date.now
        }
    }
);



// see Author model for notes about this ish
BookInstanceSchema
    .virtual('url')

    // es5
    // .get(function () {
    //     return '/catalog/bookinstance/' + this._id;
    // });

    // es6
    .get( () => '/catalog/bookinstance/' + this._id );



BookInstanceSchema
    .virtual('due_back_formatted')
    // .get(function () {
    //   return moment(this.due_back).format('MMMM Do, YYYY');
    // });

    .get( () => moment(this.due_back).format('MMMM Do, YYYY') );






module.exports = mongoose.model('BookInstance', BookInstanceSchema);

