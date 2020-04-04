import React from 'react'
import withNavbar from '../hoc/withNavbar';
import LoginBox from '../Components/LoginBox';


function AccountPage() {
    if(localStorage.getItem("token") === null){
        return(
            <LoginBox/>
        )
    }

    return (
        <div>
            <h1>Hola {localStorage.getItem("firstName")} !</h1>
        </div>
    )
}

const WrappedComponent = withNavbar(AccountPage);

export default WrappedComponent;
