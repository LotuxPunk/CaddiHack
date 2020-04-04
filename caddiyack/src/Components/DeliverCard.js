import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { indigo, cyan, deepOrange, deepPurple, grey} from '@material-ui/core/colors';

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
    },
    avatarBox: {
      display: 'flex',
      marginTop: 15,
    },
    avatar: {
      marginRight: 20,
    },
    orange: {
        backgroundColor: deepOrange[500],
    },
    purple: {
        backgroundColor: deepPurple[500],
    },
  });

function DeliveryCard(){
    const classes = useStyles();
    return(
        <div className='DeliveryCar'>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        Je veux livrer !
                    </Typography>
                    <Typography className={classes.description}>
                        Rendez service à la communauté ! En allant faire vos courses, prenez la liste de vos voisins !
                    </Typography>
                    <div className={classes.avatarBox}>
                      <div className='avatars'>
                        <Avatar className={classes.orange + " " + classes.avatar}>N</Avatar>
                      </div>
                      <div className='description'>
                        <Typography>
                          Nicodème attends sa livraison !
                          Aidez votre voisin(e) !
                        </Typography>	
                      </div>
                    </div>        
                </CardContent>
                <CardActions>
                    <Button size="small" className={classes.secondary + " " + classes.deliveryBtn}>FAIRE LA LIVRAISON</Button>
                </CardActions>
            </Card>
        </div>
    )
}
 
export default DeliveryCard;