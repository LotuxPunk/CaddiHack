import React, { useEffect, useState } from 'react'
import withNavbar from '../hoc/withNavbar';
import logo from '../images/logo-caddiyack-tiny.png';
import axios from 'axios';
import { indigo } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LinkIcon from '@material-ui/icons/Link';


const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: indigo[400],
    },
}));

function HomePage() {

    const classes = useStyles();
    const [favs, setFavs] = useState([]);
    const [lists, setLists] = useState([]);
    const [helps, setHelps] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        if(localStorage.getItem("token")){
            axios.get("https://cyberrubberducks-webapps.azurewebsites.net/api/Favorite/myFavorites")
            .then(res => {
                setFavs(res.data);
            });

            axios.get("https://cyberrubberducks-webapps.azurewebsites.net/api/ShoppingList/myList")
            .then(res => {
                setLists(res.data);
            });

            axios.get("https://cyberrubberducks-webapps.azurewebsites.net/api/ShoppingList/myHelp")
            .then(res => {
                setHelps(res.data);
            });
        }
    }, []);


    const handleShopFavClick = (id) => {
        localStorage.setItem("shop", id);
        history.push("/choice");
    }

    let favTab = (
        <div className={classes.box + " container text-white text-center rounded-lg align-middle p-4"} style={{height:150}}>
            <p>Vous n'avez pas encore de commerce favoris</p>
            <Button color="inherit" variant="outlined">
                Vers les commerces
            </Button>
        </div>
    );

    let listTab = (
        <div className={classes.box + " container text-white text-center rounded-lg align-middle p-4"} style={{height:150}}>
            <p>Vous n'avez pas encore de liste</p>
        </div>
    );

    let helpTab = (
        <div className={classes.box + " container text-white text-center rounded-lg align-middle p-4"} style={{height:150}}>
            <p>Vous n'avez pas encore de liste prise en charge</p>
        </div>
    );

    if(localStorage.getItem("token") ){
        if(favs.length > 0){
            const listFav = favs.map((f, index) => 
            (<ListItem key={index}>
                <ListItemAvatar>
                    <Avatar src={f.picturePath}>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={f.name} secondary={f.address + ",  " + f.locality} />
                <IconButton aria-label="delete" onClick={()=>{handleShopFavClick(f.id)}} className="float-right">
                    <ListIcon fontSize="large" />
                </IconButton>
            </ListItem>));
        
            favTab = (<List>{listFav}</List>);
        }
        
        if(lists.length > 0){
            const listList = lists.map((l, index) => (
                <ListItem key={index}>
                    <ListItemAvatar>
                        <Avatar>
                            <ListIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={l.name} secondary={l.shop + ",  " + (l.delivered === true ? "Livrée" : "En cours")} />
                </ListItem>
            ));
            
            listTab = (<List>{listList}</List>);
        }

        if(helps.length > 0){
            const helpList = helps.map((l, index) => (
                <ListItem key={index}>
                    <ListItemAvatar>
                        <Avatar>
                            <ShoppingCartIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={l.name} secondary={"Liste de " + l.owner + " à " + l.shop} />
                    <IconButton aria-label="delete" className="float-right">
                        <LinkIcon fontSize="large" />
                    </IconButton>
                </ListItem>
            ));
            helpTab = (<List>{helpList}</List>);
        }

    }
    
    return (
        <div className="container-fluid mt-3">
            <h1>Bonjour</h1>
            <img className="position-absolute" variant="square" style={{right:40, top:25, width:80}} src={logo} alt="CaddiYack"/>
            <div className="mt-5">
                <h3>Mes favoris</h3>
                {favTab}                
            </div>
            <div className="mt-3">
                <h3>Mes listes</h3>
                {listTab}
            </div>
            <div className="mt-3">
                <h3>Mes listes prise en charge</h3>
                {helpTab}
            </div>
        </div>
    )
}

const WrappedComponent = withNavbar(HomePage);

export default WrappedComponent;