import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../Forms/TextField";
import Button from '../utils/Button';
import Map from '../utils/Map';
import { movieTheatreCreationDTO } from "./movieTheatre.model";
import * as Yup from 'yup';
import {coordinatesModelDTO} from "../utils/coordinates.model";

export default function MovieTheaterForm(props: movieTheaterForm) {

    function transformCoordinates(): coordinatesModelDTO[] | undefined {
        if (props.model.latitude && props.model.longitude) {
            const response: coordinatesModelDTO = {
                latitude: props.model.latitude,
                longitude: props.model.longitude
            }
            return [response];
        }

        return undefined;
    }

    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required')
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName="Name" field="name" />

                    <div style={{ marginBottom: '1rem' }}>
                        <Map  />
                    </div>

                    <Button disabled={formikProps.isSubmitting} type="submit">
                        Save Changes
                    </Button>
                    <a className="btn btn-secondary" href="/movietheaters">Cancel</a>
                </Form>
            )}
        </Formik>
    )
}

interface movieTheaterForm {
    model: movieTheatreCreationDTO;
    onSubmit(values: movieTheatreCreationDTO, actions: FormikHelpers<movieTheatreCreationDTO>): void;
}