// pages/checkout/index.js
import { useStripe } from '@stripe/react-stripe-js';
import getStripe from '../utils/get-stripe';

export default function CheckoutPage() {
    const stripe = useStripe();

    const handleClick = async (event) => {
        // Call your backend to create the Checkout Session
        const response = await fetch('/api/stripe', { method: 'POST' });
        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.sessionId,
        });

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
            console.error(result.error.message);
        }
    };

    return (
        <div>
            <h1>Checkout</h1>
            <button role="link" onClick={handleClick}>
                Checkout
            </button>
        </div>
    );
}
