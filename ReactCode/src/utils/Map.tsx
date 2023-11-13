import { MapContainer, TileLayer, useMapEvent, Marker } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import  {coordinatesModelDTO}  from './coordinates.model';
import { useState } from 'react';

let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps) {
   const [coordinates,setCoordinates]= useState<coordinatesModelDTO[]>([]);

    return (
        <MapContainer
            center={[-34.6083, -58.3712]} zoom={13}
            style={{ height: props.hight }}
        >



            <TileLayer
                attribution="React Movies"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClickPoint setCoordinates={coordinates =>{
                setCoordinates([coordinates]);
            }} />
            {coordinates.map((coordinate, index) => <Marker key={index}
            position={[coordinate.latitude, coordinate.longitude]}></Marker>)}
        </MapContainer>
    )

}

interface mapProps {
    hight: string;
}

Map.defaultProps = {
    hight: "500px"
}

function MapClickPoint(props: mapClickProps) {
    useMapEvent('click', (e) => {
       props.setCoordinates({ latitude: e.latlng.lat, longitude: e.latlng.lng });
    })

    return null;    
    
}

interface mapClickProps {
    setCoordinates(coordinates: coordinatesModelDTO): void;
}

