import React, { useState } from 'react'
import withNavbar from '../hoc/withNavbar';
import ListdeliveryCard from '../Components/ListDeliveryCard';
import { makeStyles } from '@material-ui/core/styles';
import ListDeliveryCard from '../Components/ListDeliveryCard';

// const useStyles = makeStyles((theme) => ({
//     titre: {
//         textAlign: "center",
//     },
// }));

function DeliveriesPage() {

    // const classes = useStyles();

    const [items, setItems] = useState([]);

    const lists = items.map(item => <p>item</p>)
    return (
        <div className="DeliveriesPage container-fluid pt-3">
            <h1>Listes</h1>
            <ListDeliveryCard items={items}/>
        </div>
    )
}

const WrappedComponent = withNavbar(DeliveriesPage);

export default WrappedComponent;