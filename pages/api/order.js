import { MongoClient } from 'mongodb';

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
                    customerAddress: newOrder.address,
                    totalAmount: newOrder.total,
                    orderStatus: newOrder.status,
                    paymentMethod: newOrder.method,
                    orderDetails: newOrder.orderDetails,
                });

                res.status(201).json(order)
            } catch (error) {
                console.log(error);
                res.status(500).json({ msg: "Error, check console." });
            }
            client.close();
            break;
    }
}