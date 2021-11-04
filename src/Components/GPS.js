import React,{useState} from 'react'
import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

import Geocode from 'react-geocode';
Geocode.setApiKey('AIzaSyC9QhogybZ3u9oGs5fpxlSmVr1MCWwaA5c')

const GPSlocation =() => {
  
    const [address,setAddress] = useState(""); 
    const [city,setCity] = useState(""); 
    const [area,setArea] = useState(""); 
    const [state,setState] = useState("");
    const [height,setHeight] = useState(400);
    const [maplat,setMaplat] = useState("");
    const [maplng,setMaplng] = useState(""); 
    const [markerlat,setMarkerlat] = useState("");
    const [markerlng,setMarkerlng] = useState("");

    const getlatlng = () => {

        // getfromserver
        const newlat = 13.90070690;
        const newlng = 100.66505990;

        Geocode.fromLatLng(newlat,newlng)
        .then(response=>{
            console.log("lat,lng=",response);
        })

    }

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        <Marker position={{ lat: -34.397, lng: 150.644 }}>
            <InfoWindow>
                <div>
                    hello info window
                </div>
            </InfoWindow>
        </Marker>
     
    </GoogleMap>
  ));
  
  return(
      <div>
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9QhogybZ3u9oGs5fpxlSmVr1MCWwaA5c&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
  )

}

export default GPSlocation;