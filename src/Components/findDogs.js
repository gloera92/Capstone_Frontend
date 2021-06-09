import React from 'react';
import{GoogleMap, useLoadScript, Marker, InfoWindow, MarkerClusterer} from "@react-google-maps/api";




const libraries = ["places"];
const mapContainerStyle= {
    width: "100vw",
    height: "100vh",
};

const center = {
    lat: 36.06894029732138,
    lng: -93.72992620930327,
   
};


const locations = [
    { lat: 36.068940, lng: -93.679926},
    { lat: 36.048940, lng: -93.745926},
    { lat: 36.058940, lng: -93.729926},
    { lat: 36.058940, lng: -93.789826},
    { lat: 36.078920, lng: -93.779926},
    { lat: 36.087106, lng: -93.7143133},
    { lat: 36.088940, lnd: -93.729926}
  ]




export default function DogMap() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCAFSMzPFaMorkiyNVryeFjnPMdfa9gwGQ',
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((event) => {
        setMarkers((current) => [
            ...current,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
                                
            },
        ]);
    }, []);


    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map
    }, []);



    if (loadError) return "Error Loading Maps";
    if (!isLoaded) return "Loading Maps";

    function createKey(location) {
        return location.lat + location.lng
      }
     
      const options = {
        imagePath:
          'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
      }  

    
      

    

    return (
        <div>

            <h1>Dogs {" "}
                <span role="img" aria-label="dog">
                    🐕‍🦺
                </span> 
            </h1>  
            <GoogleMap mapContainerStyle=
            {mapContainerStyle} 
            zoom={13} 
            center={center}
            clickableIcons={'True'}
            onClick={onMapClick}
            onLoad={onMapLoad}
            >
                {markers.map(marker => 
                <Marker 
                key={marker.time.toISOString()} 
                position={{lat:marker.lat, lng:marker.lng}}
                icon={{
                    url: './dog.jpg',
                    scaledSize: new window.google.maps.Size(30,30),
                    origin: new window.google.maps.Point(0,0),
                    anchor: new window.google.maps.Point(15,15),
                }}
                onClick={() => {
                    setSelected(marker);
                    
                }}
                />)}
                        <MarkerClusterer options={options}>
                                    {(clusterer) =>
                                    locations.map((location) => (
                                        <Marker key={createKey(location)} 
                                        icon={{
                                            url: './dog.jpg',
                                            scaledSize: new window.google.maps.Size(30,30),
                                            origin: new window.google.maps.Point(0,0),
                                            anchor: new window.google.maps.Point(15,15), }} 
                                            position={location} 
                                            clusterer={clusterer}
                                            onClick={() => {
                                                setSelected(location);
                                                
                                            }}
                                            
                                            />
                                            ))}
                            
                        </MarkerClusterer>     
                {selected ? (
                            <InfoWindow position={{lat: selected.lat, lng: selected.lng}}>
                            <div>
                            <h2> Dog Info</h2>
                            <p> Nancy, Black and White, Lab, Medium, 5</p>
                            </div>
                            </InfoWindow>
                            ) : null}
            </GoogleMap>
        </div>
    );
}



