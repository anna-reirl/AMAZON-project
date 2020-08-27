import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{  basket }] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout_ad" src="https://3ie87c2dond928rt2e2zzo8o-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/Screen-Shot-2018-07-19-at-4.27.38-PM.png" 
            alt="" 
        />
        {basket?.length === 0 ? (
            <div>
                <h2>Your Shopping Baket is empty</h2>
                </div>
        ) : (
            <div>
                <h2 className="checkout__title">Your Shopping Baket</h2>
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
    );
}

export default Checkout
