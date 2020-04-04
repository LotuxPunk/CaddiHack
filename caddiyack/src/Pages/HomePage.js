import React from 'react'
import withNavbar from '../hoc/withNavbar';

function HomePage() {
    return (
        <div>
            <h1>Home sweet home !</h1>
        </div>
    )
}

const WrappedComponent = withNavbar(HomePage);

export default WrappedComponent;