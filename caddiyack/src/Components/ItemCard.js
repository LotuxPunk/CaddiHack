import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { indigo, cyan } from '@material-ui/core/colors';
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import Clear from '@material-ui/icons/Clear'

const useStyles = makeStyles({
    root: {
      display: "flex",
      minWidth: 275,
      marginTop: 10,
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
      width: 50,
    },
    pos: {
      marginBottom: 12,
    },
    itemBtn: {
        fontSize: 15,
    },
    removeBtn: {
        height: "100%",
    },
    countBox: {
        position: "relative",
        display: "flex",
        fontSize: 18,
        left: 25,
        width: 190,
    },
    count: {
        marginBottom: 0,
        paddingTop: 15,
        width: 59,
        textAlign: "center",
    },
    removeArticleBox: {
        position: "relative",
        left: 10,
    },
    infoBox : {
        width: 150,
    },
    info: {
        fontSize: 16,
        color: cyan[800],
        textAlign: "center",
    },
  });


function ItemCard(props){

    const [nbItems, setNbItems] = useState(props.item.count);

    function addItem(){
        setNbItems(nbItems + 1);
        props.countChange(props.item, 1);
    }

    function removeItem(){
        if(nbItems !== 1){
            setNbItems(nbItems - 1);
            props.countChange(props.item, -1);
        }
    }

    const classes = useStyles();

    return(
        <div className='Item'>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title}>
                        {props.item.label}
                    </Typography>
                    <Typography className={classes.infoBox}>
                        {props.item.count + " " + props.item.unit}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default ItemCard;