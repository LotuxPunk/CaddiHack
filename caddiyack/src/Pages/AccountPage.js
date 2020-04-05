import React from 'react'
import withNavbar from '../hoc/withNavbar';
import LoginBox from '../Components/LoginBox';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function AccountPage() {
    let history = useHistory();
    
    if(localStorage.getItem("token") === null){
        return(
            <LoginBox/>
        )
    }

    const handleClick= () => {
        localStorage.clear();
        history.push("/account");
    }

    return (
        <div className="container-fluid pt-3">
            <h1>{localStorage.getItem("firstName")}</h1>
            <Button onClick={() => handleClick()} className="mx-auto text-danger">Se déconnecter</Button>
        </div>
    )
}

const WrappedComponent = withNavbar(AccountPage);

export default WrappedComponent;
