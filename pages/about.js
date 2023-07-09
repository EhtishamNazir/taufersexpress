import Layout from '../components/Layout';

import classes from '../styles/about.module.css';

export default function About() {
    return (
        <Layout>
            <div className={classes.container}>
                <div className={classes.about}>
                    <div className={classes.heading}>
                        <span>We are the</span>
                        <span>Taufers Express </span>
                        <span>Grill & Pizza</span>
                    </div>
                    <div className={classes.story}>
                        <p>We have started a new branch here in Sand in Taufers (Campo Tures). The very delightful views valley and this valley deserves to be most popular with food too. So by taking this aim we are here to provide you best food and taste on your call</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
