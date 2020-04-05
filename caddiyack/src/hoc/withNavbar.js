import React, {Component, Fragment} from 'react';
import Navbar from '../Components/NavBarBottom';

const withNavbar = WrappedComponent => (
    class Template extends Component {
        render(){
            return (
                <Fragment>
                    <div id="main" className="container-fluid pb-5">
                        <WrappedComponent/>
                    </div>
                    <Navbar/>
                </Fragment>
            );
        }
    }
);

export default withNavbar;