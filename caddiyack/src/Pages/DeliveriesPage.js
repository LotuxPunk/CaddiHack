import React, { useState, useEffect } from 'react'
import withNavbar from '../hoc/withNavbar';
import ListdeliveryCard from '../Components/ListDeliveryCard';
import { makeStyles } from '@material-ui/core/styles';
import ListDeliveryCard from '../Components/ListDeliveryCard';
import axios from 'axios';

// const useStyles = makeStyles((theme) => ({
//     titre: {
//         textAlign: "center",
//     },
// }));

function DeliveriesPage() {

    // const classes = useStyles();
    const [helps, setHelps] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        axios.get("https://cyberrubberducks-webapps.azurewebsites.net/api/ShoppingList/"+localStorage.getItem("shop"), {})
        .then(res => {
            setHelps(res.data);
        });
    }, []);

    let listHelp = helps.map(h => (<ListDeliveryCard owner={h.owner} id={h.listId}/>));

    const lists = items.map(item => <p>item</p>)
    return (
        <div className="DeliveriesPage container-fluid pt-3">
            <h1>Listes</h1>
            {listHelp}
        </div>
    )
}

const WrappedComponent = withNavbar(DeliveriesPage);

export default WrappedComponent;