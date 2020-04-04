import React from 'react'
import withNavbar from '../hoc/withNavbar';


function ShopsPages() {
    return (
        <div>
            <h1>Olé !</h1>
        </div>
    )
}

const WrappedComponent = withNavbar(ShopsPages);

export default WrappedComponent;
