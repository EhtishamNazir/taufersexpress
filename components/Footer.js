
import Image from 'next/image';

import classes from '../styles/footer.module.css';
import { UilFacebook, UilWhatsapp, UilInstagram } from '@iconscout/react-unicons';
import Logo from '../assets/Logo.png';
import Link from 'next/link';

const Footer = () => {
    const phoneNumber = '+393248909003'; // Replace with your desired phone number
    const message = 'Hello, I want to connect with you!'; // Replace with your desired message

    // Encode the phone number and message for the URL
    const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    const encodedMessage = encodeURIComponent(message);

    // Generate the WhatsApp link
    const whatsappLink = `https://wa.me/${encodedPhoneNumber}?text=${encodedMessage}`;

    return (
        <div className={classes.container}>
            <span>ALL RIGHT RESERVED</span>
            <div className={classes.social}>
                <Link href="https://www.facebook.com/TaufersExpress">
                    <UilFacebook size={45} />
                </Link>
                <Link href={whatsappLink}>
                    <UilWhatsapp size={45} />
                </Link>
                <Link href="https://www.instagram.com/taufersexpresspizza/">
                    <UilInstagram size={45} />
                </Link>
            </div>
            <div className={classes.logo}>
                <Image src={Logo} alt="Logo" width={150} height={50} />
                {/* <span>Fudo</span> */}
            </div>
        </div>
    );
}

export default Footer;