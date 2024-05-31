const Razorpay = require('razorpay');
const{ RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET} = process.env;
const instance = new Razorpay({
    key_id: RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_KEY_SECRET
});

module.exports = {
    razorpayPayment : async(orderId, totalPrice)=>{
        try{
            const id = ""+ orderId;
            const order = await instance.orders.create({
                amount : totalPrice * 100,
                currency :"INR",
                receipt : id
            });
            return order;
        }
        catch(error){
            console.error("Error creating Razorpay order:",error);
        }
    }
}