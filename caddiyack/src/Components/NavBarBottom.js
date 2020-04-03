import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Home from '@material-ui/icons/Home'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Person from '@material-ui/icons/Person'

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
});

export default function NavBarBottom() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div className="NavBarBottom fixed-bottom">
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Home" icon={<Home />} />
                <BottomNavigationAction label="Magasins" icon={<ShoppingCart />} />
                <BottomNavigationAction label="Mon compte" icon={<Person />} />
            </BottomNavigation>
        </div>
    );
}