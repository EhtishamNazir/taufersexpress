import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {

    const productId = req.query.pid;

    switch (req.method) {

        case "POST":
            // Connect to MongoDB
            const client = await MongoClient.connect(process.env.MONGODB_URI);
            const db = client.db(process.env.MONGODB_DB);

            try {

                // const result = await req.db.collection('items').deleteOne({ _id: id });
                const deleteProduct = await db.collection('FoodItem').deleteOne({ _id: new ObjectId(productId) });

                res.status(201).json(deleteProduct);
            } catch (error) {
                console.log(error);
                res.status(500).json({ msg: "Error, check console." });
            }

            client.close();
            break;
    }
}