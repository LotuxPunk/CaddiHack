import React from 'react'
import withNavbar from '../hoc/withNavbar';
import DeliveryCard from '../Components/DeliveryCard';
import DeliverCard from '../Components/DeliverCard';

function ChoicePage(){
    return(
        <div className='ChoicePage'>
            <DeliveryCard />
            <DeliverCard />
        </div>
    );
}

const WrappedComponent = withNavbar(ChoicePage);

export default WrappedComponent;