const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/CRUD");
const userSchema= mongoose.Schema({
    name: String,
    email: String,
    username:String,
});
module.exports = mongoose.model('User',userSchema);