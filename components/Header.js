import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useStore } from "../store/store";
import classes from '../styles/header.module.css';
import Logo from '../assets/Logo.png';
import { UilShoppingBag, UilReceipt } from '@iconscout/react-unicons';


const Header = () => {
    const [order, setOrder] = useState("");
    useEffect(() => {
        setOrder(localStorage.getItem("order"));
    }, []);

    // state in terminal
    const state = useStore((state) => state);

    const cartItemsLength = useStore((state) => state.cart.pizzas.length);
    return (
        <div className={classes.header}>
            {/* Logo Side */}
            <div className={classes.logo}>
                <Link href='/'>
                    <Image src={Logo} alt="Logo" width={150} height={50} />
                </Link>
                {/* <span>Fudo</span> */}
            </div>

            {/* Menu Side */}
            <div className={classes.menu}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Menu</Link></li>
                <li><Link href="/">Contact</Link></li>
            </div>

            {/* Right Side */}
            <div className={classes.rightSide}>
                <Link href='/cart'>
                    <div className={classes.cart}>
                        <UilShoppingBag size={35} color='#2e2e2e' />
                        <div className={classes.badge}>{cartItemsLength}</div>
                    </div>
                </Link>
                {
                    order && (
                        <Link href={`/order/${order}`}>
                            <div className={classes.cart}>
                                <UilReceipt size={35} color='#2e2e2e' />
                                {order != "" &&
                                    <div className={classes.badge}>1</div>
                                }
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default Header;