const express = require('express');
const router = express.Router();

router.post('/food-data', (req, res) => {
    try {

        return res.send([global.foodItems, global.foodCategory]);
    } catch (error) {
        console.log('Error --', error);
        return res.send('Server Error');
    }
})

module.exports = router;