import React from 'react'
import withNavbar from '../hoc/withNavbar';
import LoginBox from '../Components/LoginBox';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
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
            <Avatar alt={localStorage.getItem("firstName")} className="position-fixed" style={{right:40, top:25}}>{localStorage.getItem("name").charAt(0)}</Avatar>
            <Button onClick={() => handleClick()} className="mx-auto text-danger">Se déconnecter</Button>
        </div>
    )
}

const WrappedComponent = withNavbar(AccountPage);

export default WrappedComponent;
