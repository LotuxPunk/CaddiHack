import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { indigo, cyan, deepOrange, deepPurple, grey} from '@material-ui/core/colors';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Map from './Map';
import ItemCard from './ItemCard';
import axios from 'axios';

const items = [{"item":2,"label":"Test2","unit":"l","price":10.3,"count":5},{"item":5,"label":"Test5","unit":"boite","price":8,"count":8},{"item":4,"label":"Test4","unit":"kg","price":100,"count":9}]


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: 10,
    },
    media: {
        maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "80%",
    },
    expand: {
        position: "relative",
        left: 80,
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    info: {
        fontSize: 18,
        color: cyan[800],
        marginTop: 15,
        textAlign: "center",
    },
    orange: {
        backgroundColor: deepOrange[500],
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    mapBox : {
        height: "80%",
    }
}));


export default function ListDeliveryCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    let history = useHistory();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handlePickList = () => {
        axios.put("https://cyberrubberducks-webapps.azurewebsites.net/api/ShoppingList/"+props.id)
        .then(res =>{
            history.push("/");
        });
    }
    
    
    const articles = items.map(item => <ItemCard item={item} />)

    return (
        <div className="ListDeliveryCard">
            <Card className={classes.root}>
                <CardContent>
                    <div className='avatars'>
                        <Avatar className={classes.orange + " " + classes.avatar}>N</Avatar>
                    </div>
                    <div className='description'>
                        <Typography>
                            Prenez en charge la liste de {props.owner} !
                        </Typography>	
                      </div>        
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=> handlePickList(props.id)} className={classes.secondary + " " + classes.deliveryBtn}><CheckBoxIcon/> FAIRE LA LIVRAISON</Button>
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
                        <p className={classes.info}>Nicodème vous attends ici !</p>
                        <Map location={[50.293963,5.096994]} area={15} />
                        <p className={classes.info}>La liste de Nicodème</p>
                        {articles}
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}
