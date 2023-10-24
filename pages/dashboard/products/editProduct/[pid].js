import { useState } from 'react';
import { MongoClient, ObjectId } from 'mongodb';
import Image from 'next/image';

import DashboardLayout from '../../../../components/DashboardLayout';
import Login from '../../../../components/Login';

export default function Product({ product }) {
    if (!(typeof window !== 'undefined' && localStorage.getItem('isLoggedIn'))) {
        return <Login />
    }
    return (
        <DashboardLayout>
            <div>Edit Product</div>
        </DashboardLayout>
    )
}

export async function getStaticProps({ params }) {
    const productId = params.pid;
    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('FoodItem');
    const product = await collection.findOne({ _id: new ObjectId(productId) });

    client.close();

    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        },
    };
}

export async function getStaticPaths() {
    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection('FoodItem');
    const products = await collection.find({}, { projection: { _id: 1 } }).toArray();

    const paths = products.map((product) => ({
        params: { pid: product._id.toString() },
    }));

    client.close();

    return {
        paths,
        fallback: false, // Or 'blocking' if you want to use incremental static regeneration
    };
}