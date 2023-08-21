import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useStore } from "../store/store";
import classes from '../styles/dashboardHeader.module.css';
import Logo from '../assets/Logo-Dark.png';
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
                <Link href='/dashboard'>
                    <Image src={Logo} alt="Logo" width={150} height={50} />
                </Link>
                {/* <span>Fudo</span> */}
            </div>

            {/* Menu Side */}
            <div className={classes.menu}>
                <li><Link href="/dashboard">New Order</Link></li>
                <li><Link href="/dashboard">Completed Orders</Link></li>
                <li><Link href="/dashboard/addProduct">Add Product</Link></li>
            </div>

            {/* Right Side */}
            <div className={classes.rightSide}>
                <div className={classes.toggleBtn} onClick={handleMobileMenu}>
                    <UilBars size={32} />
                </div>
            </div>

            {isOpen && <div className={classes.mobileMenu}>
                <ul>
                    <li onClick={() => setIsOpen(false)}><Link href="/dashboard">New Order</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link href="/dashboard">Completed Orders</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link href="/dashboard/addProduct">Add Product</Link></li>
                </ul>
            </div>}
        </div>
    );
}

export default Header;