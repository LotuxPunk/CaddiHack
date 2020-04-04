import React from 'react'
import withNavbar from '../hoc/withNavbar';
import ListCard from '../Components/ListCard';
import DeliverCard from '../Components/DeliverCard';

function ChoicePage(){
    return(
        <div className='ChoicePage'>
            <ListCard />
            <DeliverCard />
        </div>
    );
}

const WrappedComponent = withNavbar(ChoicePage);

export default WrappedComponent;