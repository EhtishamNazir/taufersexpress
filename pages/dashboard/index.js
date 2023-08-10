import Link from 'next/link';
import Image from 'next/image';

import Logo from '../../assets/Logo.png';
import classes from '../../styles/dashboard.module.css';
import Sidebar from '../../components/Sidebar';

function Dashboard() {
    return (
        <div className={classes.container}>
            <div className={classes.sidebarMainWrapper}>
                <Sidebar />

            </div>
        </div>
    )
}

export default Dashboard;