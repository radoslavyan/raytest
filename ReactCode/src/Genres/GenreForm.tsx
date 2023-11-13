import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../Forms/TextField";
import Button from "../utils/Button";
import * as yup from 'yup';
import { genreDTO } from "../Genres/genres.model";


export default function GenreForm(props: GenreFormProps) {
    return <>
        <Formik initialValues={props.model}

            onSubmit={props.onSubmit} 
            validationSchema={yup.object({
                name: yup.string().required("This field is required")
            })}
        >
            {(formikProps) => (
                < Form >
                    <TextField field="name" displayName="Name" />
                    <Button disabled={formikProps.isSubmitting} type="submit">Save Chagens</Button>
                    <a className="btn btn-secondary" href="/genres">Cancel</a>
                </Form>
            )}

        </Formik >

    </>
}

interface GenreFormProps {
    model: genreDTO
    onSubmit(values: genreDTO, action: FormikHelpers<genreDTO>): void;
}