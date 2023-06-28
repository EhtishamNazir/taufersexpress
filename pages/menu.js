import Image from 'next/image';
import Link from 'next/link';

import { client } from "../lib/client";
import urlFor from '../lib/client';
import classes from '../styles/menuPage.module.css';
import Layout from '../components/Layout';

export default function FullMenu({ pizzas }) {
    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <span>OUR MENU</span>
                    <span>Menu That Always</span>
                    <span>Make you Fall in Love</span>
                </div>

                {/* Pizzas */}
                <div className={classes.menu}>
                    {
                        pizzas.map((pizza, id) => {
                            const src = urlFor(pizza.image).url();
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza.slug.current}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image loader={() => src} src={src} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span>{pizza.name}</span>
                                    <span><span style={{ color: 'var(--themeRed)' }}>€ </span>{pizza.price[1]}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    );
}

export const getServerSideProps = async () => {
    const query = '*[_type == "pizza"]';
    const pizzas = await client.fetch(query);
    return {
        props: {
            pizzas
        }
    }
}

