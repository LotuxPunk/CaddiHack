import React from 'react'
import withNavbar from '../hoc/withNavbar';


function AccountPage() {
    return (
        <div>
            <h1>Hola !</h1>
        </div>
    )
}

const WrappedComponent = withNavbar(AccountPage);

export default WrappedComponent;
