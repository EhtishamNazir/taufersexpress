
import Image from 'next/image';

import classes from '../styles/footer.module.css';
import { UilFacebook, UilGithub, UilInstagram } from '@iconscout/react-unicons';
import Logo from '../assets/Logo.png';

const Footer = () => {
    return (
        <div className={classes.container}>
            <span>ALL RIGHT RESERVED</span>
            <div className={classes.social}>
                <UilFacebook size={45} />
                <UilGithub size={45} />
                <UilInstagram size={45} />
            </div>
            <div className={classes.logo}>
                <Image src={Logo} alt="Logo" width={150} height={50} />
                {/* <span>Fudo</span> */}
            </div>
        </div>
    );
}

export default Footer;