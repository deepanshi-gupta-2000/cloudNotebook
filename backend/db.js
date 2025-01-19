const mongoose = require('mongoose');
// const mongoURI = "mongodb://127.0.0.1:27017/iNotebook?authSource=admin"
const mongoURI = "mongodb+srv://2000deepanshigupta:6Wj9QJyOm5ObvSaX@cluster0.sy3zb.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0"

const connectToMongo = () => {
    mongoose.connect(mongoURI);
    console.log('connected to mongoose sucessfully');
}

module.exports = connectToMongo;