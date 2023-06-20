import Image from "next/image";

import classes from '../styles/hero.module.css';
import Cherry from '../assets/Cherry.png';
import HeroImage from '../assets/HeroImage.png';
import { UilPhone } from '@iconscout/react-unicons';
import Pizza1 from '../assets/p1.jpg';

const Hero = () => {
    return (
        <div className={classes.container}>
            {/* Left Side */}
            <div className={classes.left}>
                <div className={classes.cherryDiv}>
                    <span>More than Faster</span>
                    <Image src={Cherry} alt="Cherry Image" width={40} height={25} />
                </div>
                <div className={classes.heroText}>
                    <span>Be The Fastest</span>
                    <span>In Delivering</span>
                    <span>Your <span style={{ color: "var(--themeRed)" }}>Pizza</span></span>
                </div>
                <span className={classes.miniText}>
                    Our Mission is to filling your tummy with delicious food and with free fome delivery.
                </span>
                <button className={`btn ${classes.btn}`}>Get Started</button>
            </div>
            {/* Right Side */}
            <div className={classes.right}>
                <div className={classes.imageContainer}>
                    <Image src={HeroImage} alt="Hero Image" layout="intrinsic" />
                </div>
                <div className={classes.contactUs}>
                    <span>Contact Us</span>
                    <div><UilPhone color="white" /></div>
                </div>
                <div className={classes.pizza}>
                    <div>
                        <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic" />
                    </div>
                    <div className={classes.details}>
                        <span>Italian Pizza</span>
                        <span><span style={{ color: 'var(--themeRed)' }}>$</span> 7.49</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;