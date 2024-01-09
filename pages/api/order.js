import { MongoClient } from 'mongodb';
import { sendMail } from "../../lib/mailService";

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            const newOrder = await JSON.parse(req.body);

            // Connect to MongoDB
            const client = await MongoClient.connect(process.env.MONGODB_URI);
            const db = client.db(process.env.MONGODB_DB);
            try {
                if (!newOrder.name || !newOrder.phone || !newOrder.address) {
                    return res.status(422).json({ error: "Please add all the fields" })
                }

                const order = await db.collection('Order').insertOne({
                    customerName: newOrder.name,
                    customerPhone: newOrder.phone,
                    customerEmail: newOrder.email,
                    customerAddress: newOrder.address,
                    totalAmount: newOrder.total,
                    orderStatus: newOrder.status,
                    paymentMethod: newOrder.method,
                    orderDate: newOrder.orderDate,
                    orderDetails: newOrder.orderDetails,
                });

                const message = `<h1 style="text-align: center">You have a new order from ${newOrder.name}</h1> <h3>Order details are:</h3><p><b>Customer phone number:</b> ${newOrder.phone}</p>`;

                // const newOrder = await JSON.parse(req.body);

                const cMessage = `<h1 style="text-align: center">Thanks for placing order.</h1> <h3>We will deliver it soon</h3>`

                await sendMail(
                    "Order Update",
                    "waqarmanzoor.wm@gmail.com",
                    message
                );

                await sendMail(
                    "Order Update from TaufersExpress",
                    newOrder.email,
                    cMessage
                );

                res.status(201).json(order)

            } catch (error) {
                console.log(error);
                res.status(500).json({ msg: "Error, check console." });
            }
            client.close();
            break;
    }
}