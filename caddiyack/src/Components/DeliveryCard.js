import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { indigo, cyan } from '@material-ui/core/colors';

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
    pos: {
      marginBottom: 12,
    },
    deliveryBtn: {
        fontSize: 15,
    }
  });

function DeliveryCard(){
    const classes = useStyles();
    return(
        <div className='DeliveryCar'>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Je souhaite me faire livrer !
                    </Typography>
                    <Typography>
                        Ne sortez pas de chez vous ! Demandez à quelqu'un de prendre votre liste, et il la déposera chez vous !
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" className={classes.secondary + " " + classes.deliveryBtn}>ME FAIRE LIVRER</Button>
                </CardActions>
            </Card>
        </div>
    )
}
 
export default DeliveryCard;