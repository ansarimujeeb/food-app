const mongoose = require('mongoose');
const mongoseUrl = 'mongodb://localhost:27017/gofood';

const mongoDB = async () => {
    await mongoose.connect(mongoseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },).then((res) => {
        console.log("Database connected");
        const fetchData = mongoose.connection.db.collection("food_items");
        fetchData.find({}).toArray( function(err, data) {
            if(err){
                console.log("-----", err);
            } else {
                //console.log(data);
            }
        })
    }).catch(error => {
        console.log(error);
    });
};

module.exports = mongoDB;