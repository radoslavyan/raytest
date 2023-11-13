import { useFormikContext } from 'formik';
import {coordinatesModelDTO} from '../utils/coordinates.model';
import Map from '../utils/Map';

export default function MapField(props: mapFieldProps){

    const {values} = useFormikContext<any>();

    function handleMapClick(coordinates: coordinatesModelDTO){
        values[props.latField] = coordinates.latitude;
        values[props.lngField] = coordinates.longitude;
    }

    return (
        <Map
            //todo: add coordinates
            // coordinates={props.coordinates}
            // handleMapClick={handleMapClick}
        />
    )
}

interface mapFieldProps{
    coordinates: coordinatesModelDTO[];
    latField: string;
    lngField: string;
}

MapField.defaultProps = {
    coordinates: []
}