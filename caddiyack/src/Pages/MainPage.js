import React, { useState, useEffect, Fragment }from 'react';
import withNavbar from '../hoc/withNavbar';
import ShoppingCard from '../Components/ShoppingCard';
import axios from 'axios';

function MainPage() {
    const [shops, setShops] = useState([]);

    useEffect(()=>{
        axios.get("https://cyberrubberducks-webapps.azurewebsites.net/api/Shop")
        .then(res => {
            setShops(res.data);
        });
    }, []);

    const cards = shops.map((s, index) => (<ShoppingCard key={index} fav={s.isFavorite} id={s.shopId} name={s.name} description={s.address} image={s.picturePath}/>));

    return (
        <div className="container-fluid pt-3">
            <h1>Magasins</h1>
            <div className="MainPage col-12 mx-auto mt-4">
                {cards}
            </div>
        </div>
        
    );
}

const WrappedComponent = withNavbar(MainPage);

export default WrappedComponent;