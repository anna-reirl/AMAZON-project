import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout___left">
            <img className="checkout_ad" src="https://3ie87c2dond928rt2e2zzo8o-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/Screen-Shot-2018-07-19-at-4.27.38-PM.png" 
//             alt="" 
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty </h2>
                        <p>You have no items in your basket.
                        To buy one or more items, click "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>

                            {/* List out all of the checkout Products */}
                            {basket?.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div class="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
