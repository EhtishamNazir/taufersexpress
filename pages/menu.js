import Layout from '../components/Layout';
import Menu from "../components/Menu";
import { client } from "../lib/client";
import classes from '../styles/menuPage.module.css';

export default function MenuPage({ pizzas }) {
    if (!pizzas) {
        return <h1> Please check your internet connection</h1>;
    } else {
        return (
            <Layout>
                <div className={classes.container}>
                    <Menu pizzas={pizzas} />
                </div>
            </Layout>
        )
    }
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

