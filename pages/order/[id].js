import Layout from '../../components/Layout';
import { client } from '../../lib/client';
import Image from 'next/image';

import classes from '../../styles/order.module.css';
import Cooking from '../../assets/cooking.png';
import Onway from '../../assets/onway.png';
import Delivered from '../../assets/delivered.png';
import Bill from '../../assets/bill.png';
import Spinner from '../../assets/spinner.svg';
import { useEffect } from 'react';

export default function Orders({ order }) {

    useEffect(() => {
        if (order.status > 3) {
            localStorage.clear();
        }
    }, [order]);
    return (
        <Layout>
            <div className={classes.container}>
                <span className={classes.heading}>
                    Order in Process
                </span>
                <div className={classes.details}>
                    <div>
                        <span>Order Id</span>
                        <span>{order._id}</span>
                    </div>
                    <div>
                        <span>Customer Name</span>
                        <span>{order.name}</span>
                    </div>
                    <div>
                        <span>Phone</span>
                        <span>{order.phone}</span>
                    </div>
                    <div>
                        <span>Method</span>
                        <span>
                            {
                                order.method === 0 ? 'Cash on Delivery' : 'Online Payment (Paid)'
                            }
                        </span>
                    </div>
                    <div>
                        <span>Total Amount</span>
                        <span>${order.total}</span>
                    </div>
                </div>
                <div className={classes.statusContainer}>
                    <div className={classes.status}>
                        <Image src={Bill} alt="Bill" height={50} width={50} />
                        <span>Payment</span>
                        {order.method === 0 ?
                            <span className={classes.pending}>On Delivery</span> :
                            <span className={classes.completed}>
                                <span>Completed</span><span>Done</span>
                            </span>
                        }
                    </div>
                    <div className={classes.status}>
                        <Image src={Cooking} alt="Cooking Image" height={50} width={50} />
                        <span>Cooking</span>
                        {order.status === 1 &&
                            <div className={classes.spinner}>
                                <Image src={Spinner} alt='Spinner' height={96} width={96} />
                            </div>
                        }
                        {order.status > 1 &&
                            <span className={classes.completed}>
                                <span>Completed</span><span>Done</span>
                            </span>
                        }
                    </div>
                    <div className={classes.status}>
                        <Image src={Onway} alt="Onway Image" height={50} width={50} />
                        <span>Onway</span>
                        {order.status === 2 &&
                            <div className={classes.spinner}>
                                <Image src={Spinner} alt='Spinner' height={96} width={96} />
                            </div>
                        }
                        {order.status > 2 &&
                            <span className={classes.completed}>
                                <span>Completed</span><span>Done</span>
                            </span>
                        }
                    </div>
                    <div className={classes.status}>
                        <Image src={Delivered} alt="Delivered" height={50} width={50} />
                        <span>Delivered</span>
                        {order.status === 3 &&
                            <div className={classes.spinner}>
                                <Image src={Spinner} alt='Spinner' height={96} width={96} />
                            </div>
                        }
                        {order.status > 3 &&
                            <span className={classes.completed}>
                                <span>Completed</span><span>Done</span>
                            </span>
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async ({ params }) => {
    const query = `*[_type == 'order' && _id == '${params.id}']`;
    const order = await client.fetch(query);

    return {
        props: {
            order: order[0]
        },
    }
}
