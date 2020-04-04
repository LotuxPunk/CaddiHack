import React, { useState, useEffect }from 'react';
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

    const cards = shops.map((s, index) => (<ShoppingCard key={index} id={s.shopId} name={s.name} description={s.address} image={s.picturePath}/>));

    return (
        <div className="MainPage col-12 mx-auto mt-4">
            {cards}
        </div>
    );
}

const WrappedComponent = withNavbar(MainPage);

export default WrappedComponent;