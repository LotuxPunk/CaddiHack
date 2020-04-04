import React from 'react'
import withNavbar from '../hoc/withNavbar';
import { Avatar } from '@material-ui/core';
import logo from '../images/logo-caddiyack-tiny.png';

function HomePage() {
    return (
        <div className="container-fluid mt-3">
            <h1>Bonjour</h1>
            <img className="position-fixed" variant="square" style={{right:40, top:25, width:80}} src={logo} alt="CaddiYack"/>
            <div className="mt-5">
                <h3>Mes favoris</h3>
                <div className="container bg-secondary text-white text-center rounded-lg align-middle p-4" style={{height:200}}>
                    <p>Vous n'avez pas encore de commerce favoris</p>
                </div>
            </div>
            <div className="mt-3">
                <h3>Mes listes</h3>
                <div className="container bg-secondary text-white text-center rounded-lg align-middle p-4" style={{height:200}}>
                    <p>Vous n'avez pas encore de liste</p>
                </div>
            </div>
        </div>
    )
}

const WrappedComponent = withNavbar(HomePage);

export default WrappedComponent;