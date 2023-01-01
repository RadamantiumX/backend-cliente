import React from "react";
import {MapContainer,TileLayer,Marker,Popup,useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./mapa.css";
import L from "leaflet";
import icon from "./constants";
import { useState, useEffect } from "react";



function Mapa(){

   const LocationMarker=()=>{
    const [position, setPosition] = useState(null);
    //const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(()=>{
        map.locate().on('locationfound', function(e){
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
            //const radius = e.accuracy;
            //const circle = L.circle(e.latlng, radius);
            //circle.addTo(map);
            //setBbox(e.bounds.toBBoxString().split(","));
        });
    }),[map];

    return position === null ? null:(
        <Marker position={position} icon={icon}>
            <Popup>
                Usted esta aquí
                {/*Map bbox: <br/>
                <b>Southwest lng</b>:{bbox[0]}<br/>
                <b>Southwest lat</b>:{bbox[1]}<br/>
                <b>Southwest lng</b>:{bbox[2]}<br/>
                <b>Southwest lat</b>:{bbox[3]}*/}

            </Popup>
        </Marker>
    ); }
    return (
        <MapContainer
             center={[-34.60810, -58.37387]}
             zoom={10}
             scrollWheelZoom={true}
             className="mapa"
             >
           <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           />
            <LocationMarker />
        </MapContainer>
    );



}

export default Mapa

