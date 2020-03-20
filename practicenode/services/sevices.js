// const mongoose= require ('mongoose');

// const Schema = mongoose.Schema;
// const details = new Schema({
//     id:Number,
//     name: String,
//     collegename: String
// });


// const College = mongoose.model('table1',details);
// module.exports =College;


const mongoose = require('mongoose');

const schema = mongoose.Schema;
const details= new schema({
    id:Number,
    name:String,
    email:String,
    age:Number
})

const office = mongoose.model('emp',details);
module.exports = office;

