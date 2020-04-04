import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Person from '@material-ui/icons/Person'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
});

export default function NavBarBottom() {
    const classes = useStyles();
    let history = useHistory();
    const [value, setValue] = React.useState(0);

    return (
        <div className="NavBarBottom fixed-bottom">
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    history.push(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Home" value="/" icon={<Home />}/>
                <BottomNavigationAction label="Magasins" value="/shops" icon={<ShoppingCart />}/>
                <BottomNavigationAction label="Mon compte" value="/account" icon={<Person />}/>
            </BottomNavigation>
        </div>
    );
}