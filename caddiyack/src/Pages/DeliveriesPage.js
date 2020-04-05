import React, { useState } from 'react'
import withNavbar from '../hoc/withNavbar';
import ListdeliveryCard from '../Components/ListDeliveryCard';
import { makeStyles } from '@material-ui/core/styles';
import ListDeliveryCard from '../Components/ListDeliveryCard';


function DeliveriesPage() {

    const [items, setItems] = useState([]);

    const lists = items.map(item => <p>item</p>)
    return (
        <div className="DeliveriesPage">
            <ListDeliveryCard items={items}/>
        </div>
    )
}

const WrappedComponent = withNavbar(DeliveriesPage);

export default WrappedComponent;