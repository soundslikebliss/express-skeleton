const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
            max: 100
        },
        family_name: {
            type: String,
            required: true,
            max: 100
        },
        date_of_birth: {
            type: Date
        },
        date_of_death: {
            type: Date
        }
    }
);



// virtual
// full name
AuthorSchema
    .virtual('name')
    .get(function() {
        return this.family_name + ', ' + this.first_name;
    });

// virtual
// author's url
AuthorSchema
    .virtual('url')
    .get(function() {
        return 'catalog/author/' + this._id;
    });
// Note: Declaring our URLs as a virtual in the schema is a good idea because then the URL for an item only ever needs to be changed in one place.





module.exports = mongoose.model('Author', AuthorSchema);


