import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img
            className="home_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" />

            <div className="home__row">
            <Product 
            id={12345234} 
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" />

<Product 
            id={12342345} 
            title="Apple iPhone 11 Pro Max (64GB, Midnight Green) + Wireless Plan"
            price={1349}
            rating={5}
            image="https://www.re-store.ru/upload/iblock/7e3/7e3d1b0cd09a706a56f1ae42c327368f.jpg" />

            </div>
            
            <div className="home__row">
            <Product 
            id={12323445} 
            title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
            price={949}
            rating={5}
            image="https://www.iportkirov.ru/upload/iblock/219/2195931488bbace77ba3e2bc40cc0f43.jpg" />

<Product 
            id={123546745} 
            title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
            price={560.96}
            rating={5}
            image="https://shikalad.ru/i/imgs/tvoydom.ru/photos/1002183911/1002183911_1.jpg" />

<Product 
            id={12342355} 
            title="Coty Airspun Loose Face Powder 2.3 oz. Translucent Tone Loose Face Powder, for Setting Makeup or as Foundation, Lightweight, Long Lasting,Pack of 1"
            price={7.96}
            rating={5}
            image="https://i.ebayimg.com/00/s/MTI1MFgxMTEw/z/DB8AAOSwYIJd6G7l/$_57.JPG?set_id=8800005007" />
            </div>

        </div>
    )
}

export default Home;
