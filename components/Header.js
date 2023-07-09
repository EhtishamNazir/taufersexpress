import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useStore } from "../store/store";
import classes from '../styles/header.module.css';
import Logo from '../assets/Logo.png';
import { UilShoppingBag, UilReceipt, UilBars } from '@iconscout/react-unicons';


const Header = () => {
    const [order, setOrder] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setOrder(localStorage.getItem("order"));
    }, []);

    // state in terminal
    const state = useStore((state) => state);
    const cartItemsLength = useStore((state) => state.cart.pizzas.length);

    const handleMobileMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={classes.header}>
            {/* Logo Side */}
            <div className={classes.logo}>
                <Link href='/'>
                    <Image src={Logo} alt="Logo" width={0} height={0} sizes="100vw" style={{ width: '150px', height: 'auto' }} />
                </Link>
                {/* <span>Fudo</span> */}
            </div>

            {/* Menu Side */}
            <div className={classes.menu}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </div>

            {/* Right Side */}
            <div className={classes.rightSide}>
                <Link href='/cart'>
                    <div className={classes.cart}>
                        <UilShoppingBag size={30} color='#F3F3F3' />
                        <div className={classes.badge}>{cartItemsLength}</div>
                    </div>
                </Link>
                {
                    order && (
                        <Link href={`/order/${order}`}>
                            <div className={classes.cart}>
                                <UilReceipt size={30} color='#F3F3F3' />
                                {order != "" &&
                                    <div className={classes.badge}>1</div>
                                }
                            </div>
                        </Link>
                    )
                }
                <div className={classes.toggleBtn} onClick={handleMobileMenu}>
                    <UilBars size={30} />
                </div>
            </div>

            {isOpen && <div className={classes.mobileMenu}>
                <ul>
                    <li onClick={() => setIsOpen(false)}><Link href="/">Home</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link href="/menu">Menu</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link href="/about">About Us</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link href="/contact">Contact</Link></li>
                </ul>
            </div>}
        </div>
    );
}

export default Header;