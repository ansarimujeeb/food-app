const express = require('express');
const router = express.Router();

const Order = require('../models/Order');

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    console.log('request data');
    console.log(data);
    await data.splice(0,0,{Order_date:req.body.order_date})
    //if email not exisitng in db then create: else: InsertMany()
    let emailId = await Order.findOne({ 'email': req.body.email });
    console.log('order Email',emailId);
    if (emailId===null) {
        console.log('Insert Order');
        try {
            await Order.create({
                email: req.body.email,
                order_data:[data]
            }).then(() => {
                return res.json({success:true});
            })
        } catch (error) {
            console.log(error.message)
            return res.json({success:'Server Error', error:error.message});
        }
    }

    else {
        console.log('Update Order');
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    return res.json({success:true});
                })
        } catch (error) {
            console.log(error.message)
            return res.json({success:'Server Error', error:error.message});
        }
    }
});

module.exports = router;