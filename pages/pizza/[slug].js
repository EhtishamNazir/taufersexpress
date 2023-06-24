import { useState } from 'react';
import Image from 'next/image';
import { useStore } from '../../store/store';
import urlFor, { client } from '../../lib/client';

import Layout from '../../components/Layout';
import classes from '../../styles/pizza.module.css';
import LeftArrow from '../../assets/arrowLeft.png';
import RightArrow from '../../assets/arrowRight.png';
import toast, { Toaster } from 'react-hot-toast';

export default function Pizza({ pizza }) {
    const [size, setSize] = useState(1);
    const [quantity, setQuantity] = useState(1);

    const src = urlFor(pizza.image).url();

    const quantityHandler = (type) => {
        type === "incr"
            ? setQuantity((prev) => prev + 1)
            : quantity === 1
                ? null
                : setQuantity((prev) => prev - 1)
    }

    // add to cart function
    const addPizza = useStore((state) => state.addPizza);
    const addToCart = () => {
        addPizza({ ...pizza, price: pizza.price[size], quantity: quantity, size: size });
        toast.success("Added to Cart");
    }

    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.imageWrapper}>
                    <Image loader={(src) => src} src={src} alt={pizza.name} layout='fill' objectFit='cover' unoptimized />
                </div>
                {/* Right Side */}
                <div className={classes.right}>
                    <span>{pizza.name}</span>
                    <span>{pizza.details}</span>
                    <span><span style={{ color: 'var(--themeRed)' }}>€ </span>{pizza.price[size]}</span>
                    <div className={classes.size}>
                        <span>Size:</span>
                        <div className={classes.sizeVariants}>
                            <div onClick={() => setSize(0)} className={size === 0 ? classes.selected : ''}>S<span>mall</span></div>
                            <div onClick={() => setSize(1)} className={size === 1 ? classes.selected : ''}>M<span>edium</span></div>
                            <div onClick={() => setSize(2)} className={size === 2 ? classes.selected : ''}>L<span>arge</span></div>
                        </div>
                    </div>
                    {/* Quantity Counter */}
                    <div className={classes.quantity}>
                        <span>Quantity</span>
                        <div className={classes.counter}>
                            <Image src={LeftArrow} alt='Left Arrow' width={20} height={20} objectFit='contain' onClick={() => quantityHandler("decr")} />
                            <span>{quantity}</span>
                            <Image src={RightArrow} alt='Right Arrow' width={20} height={20} objectFit='contain' onClick={() => quantityHandler("incr")} />
                        </div>
                    </div>
                    {/* Add to Cart Button */}
                    <div className={`btn ${classes.btn}`} onClick={addToCart}>
                        Add to Cart
                    </div>
                </div>
                <Toaster />
            </div>
        </Layout>
    );
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params;
    const pizza = await client.fetch(
        `*[_type=="pizza" && slug.current == '${slug}'][0]`
    );

    return {
        props: {
            pizza
        }
    }
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    );

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: 'blocking'
    }
}
