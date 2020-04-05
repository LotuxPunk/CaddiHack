import React, { useEffect } from 'react';
import * as L from 'leaflet';
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import { makeStyles } from '@material-ui/core/styles';

let mymap;

const useStyles = makeStyles((theme) => ({
    map:{
        width: "100%",
        maxHeight: "100%",
    }
}));

function Map(props){

    const classes = useStyles();

    useEffect(()=>{
        mymap = L.map('mapid').setView([50.464006, 4.843308], 13)
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);
        L.circle(props.location, props.area).addTo(mymap);
    }, []);

    return (
        <div id="mapid" className={classes.map}>
        </div>
    )
}

export default Map;