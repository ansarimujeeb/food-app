const mongoose = require('mongoose');
const mongoseUrl = 'mongodb://localhost:27017/gofood';

const mongoDB = async () => {
    await mongoose.connect(mongoseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },).then((res) => {
        console.log("Database connected");
        const fetchData = mongoose.connection.db.collection("food_items");
        fetchData.find({}).toArray( async function(err, data) {
            const foodCategory = mongoose.connection.db.collection("food_category");
            foodCategory.find({}).toArray( async function(err, catData){
                if(err){
                    console.log("-----", err);
                } else {
                    global.foodItems = data;
                    global.foodCategory = catData;
                }
            })

            // if(err){
            //     console.log("-----", err);
            // } else {
            //     global.foodItems = data;
            //     //console.log(global.foodItems);
            // }
        })
    }).catch(error => {
        console.log(error);
    });
};

module.exports = mongoDB;