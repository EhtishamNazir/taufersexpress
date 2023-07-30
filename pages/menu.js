import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { client } from "../lib/client";
import urlFor from '../lib/client';
import classes from '../styles/menuPage.module.css';
import Layout from '../components/Layout';
import Pizza from '../assets/pizza-sm.png';
import Sandwitch from '../assets/sandwitch-sm.png';
import Burger from '../assets/burger-sm.png';
import Wrap from '../assets/wrap-sm.png';
import Doner from '../assets/doner-sm.png';
import Fries from '../assets/fries-sm.png';
import Drinks from '../assets/drinks-sm.png';
import Calzone from '../assets/calzone-sm.png';
import Salad from '../assets/salad-sm.png';

export default function FullMenu({ pizzas, sandwiches, burgers, oriental, doner, salads, finger, calzone, drinks, familyPizza }) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <span>OUR MENU</span>
                    <span>Menu That Always</span>
                    <span>Make you Fall in Love</span>
                </div>
                <div className={classes.tabs}>
                    <div onClick={() => setActiveTab(0)} className={` ${activeTab === 0 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Pizza} alt='Pizza' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Pizza</span>
                    </div>
                    <div onClick={() => setActiveTab(9)} className={` ${activeTab === 9 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Pizza} alt='Pizza' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Family Pizza</span>
                    </div>
                    <div onClick={() => setActiveTab(1)} className={` ${activeTab === 1 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Sandwitch} alt='Sandwitch' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Sandwitch</span>
                    </div>
                    <div onClick={() => setActiveTab(2)} className={` ${activeTab === 2 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Burger} alt='Burger' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Burgers</span>
                    </div>
                    <div onClick={() => setActiveTab(3)} className={` ${activeTab === 3 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Wrap} alt='Wrap' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Oriental</span>
                    </div>
                    <div onClick={() => setActiveTab(4)} className={` ${activeTab === 4 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Doner} alt='Doner' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Doner Box</span>
                    </div>
                    <div onClick={() => setActiveTab(5)} className={` ${activeTab === 5 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Salad} alt='Salad' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Salads</span>
                    </div>
                    <div onClick={() => setActiveTab(6)} className={` ${activeTab === 6 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Fries} alt='Fries' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Crisps</span>
                    </div>
                    <div onClick={() => setActiveTab(7)} className={` ${activeTab === 7 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Calzone} alt='Calzone' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Calzone</span>
                    </div>
                    <div onClick={() => setActiveTab(8)} className={` ${activeTab === 8 ? classes.active : ''} ${classes.tab}`}>
                        <div className={classes.icon}>
                            <Image src={Drinks} alt='Drinks' width={30} height={30} />
                        </div>
                        <span className={classes.itemName}>Drinks</span>
                    </div>
                </div>
                {/* Pizzas */}
                {activeTab === 0 ? <div className={classes.menu}>
                    {
                        pizzas.length > 0 ? pizzas.map((pizza, id) => {
                            const src = urlFor(pizza.image).url();
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza.slug.current}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image loader={() => src} src={src} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price[1]}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 1 ? <div className={classes.menu}>
                    {
                        sandwiches.length > 0 ? sandwiches.map((pizza, id) => {
                            const src = urlFor(pizza.image).url();
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza.slug.current}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image loader={() => src} src={src} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price[1]}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 2 ? <div className={classes.menu}>
                    {
                        burgers.length > 0 ? burgers.map((pizza, id) => {
                            const src = urlFor(pizza.image).url();
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza.slug.current}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image loader={() => src} src={src} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price[1]}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 3 ? <div className={classes.menu}>
                    {
                        oriental.length > 0 ? oriental.map((pizza, id) => {
                            const src = urlFor(pizza.image).url();
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza.slug.current}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image loader={() => src} src={src} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price[1]}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 4 ? <div className={classes.menu}>
                    {
                        doner.length > 0 ? doner.map((pizza, id) => {
                            const src = urlFor(pizza.image).url();
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza.slug.current}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image loader={() => src} src={src} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price[1]}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 5 ? <div className={classes.menu}>
                    {
                        salads.length > 0 ? salads.map((pizza, id) => {
                            const src = urlFor(pizza.image).url();
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza.slug.current}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image loader={() => src} src={src} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price[1]}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 6 ? <div className={classes.menu}>
                    {
                        finger.length > 0 ? finger.map((pizza, id) => {
                            const src = urlFor(pizza.image).url();
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza.slug.current}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image loader={() => src} src={src} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price[1]}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 7 ? <div className={classes.menu}>
                    {
                        calzone.length > 0 ? calzone.map((pizza, id) => {
                            const src = urlFor(pizza.image).url();
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza.slug.current}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image loader={() => src} src={src} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price[1]}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 8 ? <div className={classes.menu}>
                    {
                        drinks.length > 0 ? drinks.map((pizza, id) => {
                            const src = urlFor(pizza.image).url();
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza.slug.current}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image loader={() => src} src={src} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price[1]}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
                {activeTab === 9 ? <div className={classes.menu}>
                    {
                        familyPizza.length > 0 ? familyPizza.map((pizza, id) => {
                            const src = urlFor(pizza.image).url();
                            return (
                                <div className={classes.pizza} key={id}>
                                    <Link href={`./pizza/${pizza.slug.current}`}>
                                        <div className={classes.imageWrapper}>
                                            <Image loader={() => src} src={src} alt="Pizza Image" objectFit="cover" layout="fill" />
                                        </div>
                                    </Link>
                                    <span className={classes.name}>{pizza.name}</span>
                                    <span className={classes.price}><span>€ </span>{pizza.price[1]}</span>
                                </div>
                            )
                        }) : <h1 style={{ marginTop: "-2rem", fontSize: "1.5rem" }}>Item not found in this category...</h1>
                    }
                </div> : ""}
            </div>
        </Layout>
    );
}

export const getServerSideProps = async () => {
    const query = '*[_type == "pizza" && category in ["pizza"]]';
    const pizzas = await client.fetch(query);
    const query1 = '*[_type == "pizza" && category in ["sandwiches"]]';
    const sandwiches = await client.fetch(query1);
    const query2 = '*[_type == "pizza" && category in ["burgers"]]';
    const burgers = await client.fetch(query2);
    const query3 = '*[_type == "pizza" && category in ["oriental"]]';
    const oriental = await client.fetch(query3);
    const query4 = '*[_type == "pizza" && category in ["doner"]]';
    const doner = await client.fetch(query4);
    const query5 = '*[_type == "pizza" && category in ["salads"]]';
    const salads = await client.fetch(query5);
    const query6 = '*[_type == "pizza" && category in ["finger"]]';
    const finger = await client.fetch(query6);
    const query7 = '*[_type == "pizza" && category in ["calzone"]]';
    const calzone = await client.fetch(query7);
    const query8 = '*[_type == "pizza" && category in ["drinks"]]';
    const drinks = await client.fetch(query8);
    const query9 = '*[_type == "pizza" && category in ["family"]]';
    const familyPizza = await client.fetch(query9);
    return {
        props: {
            pizzas,
            sandwiches,
            burgers,
            oriental,
            doner,
            salads,
            finger,
            calzone,
            drinks,
            familyPizza
        }
    }
}

