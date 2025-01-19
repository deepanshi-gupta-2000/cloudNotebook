const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/iNotebook?authSource=admin"

const connectToMongo = () => {
    mongoose.connect(mongoURI);
    console.log('connected to mongoose sucessfully');
}

module.exports = connectToMongo;