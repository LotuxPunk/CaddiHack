import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import { CardActionArea } from "@material-ui/core";
import Collapse from '@material-ui/core/Collapse';
import Map from './Map';
import axios from 'axios';
import '../api';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "80%",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    mapBox : {
        height: "80%",
    }
}));

function ShoppingCard(props){
    let history = useHistory();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [isFav, setFav] = useState(props.fav);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleCardActionClick = (shopId) => {
        localStorage.setItem('shop', shopId);
        history.push("/choice");
    }

    const handleFavClick = () => {
        axios.post("https://cyberrubberducks-webapps.azurewebsites.net/api/Favorite/"+props.id, {})
        .then(res => {
            setFav(!isFav);
        });
    }
    return(
        <div className="ShoppingCard mb-2">
            <Card className={classes.root}>
                <CardActionArea onClick={() => handleCardActionClick(props.id)}>
                    <CardMedia
                        className={classes.media}
                        image={props.image}
                        title="Poireau dish"
                    />
                </CardActionArea>
                
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>C</Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.name}
                    subheader="7km"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton color={isFav? "secondary" : ""} onClick={() => handleFavClick()} aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className={classes.mapBox}>
                        <Map location={[50.294021,5.098466]} area={40}/>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}

export default ShoppingCard;