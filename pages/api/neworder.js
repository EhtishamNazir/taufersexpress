import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, phone, address, total, method, status } = req.body;

        // Connect to MongoDB
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db(process.env.MONGODB_DB);

        // Insert the form data into the collection
        await db.collection('Order').insertOne({
            name,
            phone,
            address,
            total,
            method,
            status
        });

        // Close the MongoDB connection
        client.close();

        res.status(200).json({ message: 'Order Placed' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
