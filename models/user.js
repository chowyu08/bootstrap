var mongoose = require('./db.js');
var Schema = mongoose.Schema;

var UserSchema = new Schema({          
    username : { type: String },
    password: {type: String},                       
    email: {type: String},                        
    phone : {type: String},
    logindate : {type: Date}                   
});

module.exports = mongoose.model('User',UserSchema);