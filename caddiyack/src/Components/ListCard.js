import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { indigo, cyan, grey } from '@material-ui/core/colors';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginTop: 30,
    },
    primary:{
      color: indigo[500],
    },
    secondary: {
      color: cyan[800],
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    description: {
      fontSize: 16,
      color: grey[700],
    },
    pos: {
      marginBottom: 12,
    },
    deliveryBtn: {
        fontSize: 15,
    }
  });

function ListCard(props){
    const classes = useStyles();
    let history = useHistory();

    const handleButtonClick = () => {
      history.push('/shopping-list');
    }

    return(
        <div className='DeliveryCar'>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Je souhaite me faire livrer !
                    </Typography>
                    <Typography className={classes.description}>
                        Ne sortez pas de chez vous ! Demandez à quelqu'un de prendre votre liste, et il la déposera chez vous !
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className={classes.secondary + " " + classes.deliveryBtn} onClick={handleButtonClick}>ME FAIRE LIVRER</Button>
                </CardActions>
            </Card>
        </div>
    )
}
 
export default ListCard;