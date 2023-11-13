import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../Forms/TextField";
import Button from "../utils/Button";
import  {IActorCreationDTO}  from "./actor.model";
import * as Yup from "yup";
import DateField from "../Forms/DateField";
import ImageField from "../Forms/ImageField";
import MarkdownField from "../Forms/MarkDownField";

export default function ActorForm(props: ActorFormProps) {

    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required("This field is required"),
                dateOfBirth: Yup.date().nullable().required("This field is required")
            })
            }
        >
            {(formikProps) => (
                <Form>
                    <TextField field="name" displayName="Name" />
                    <DateField displayName="Date Of Birth" field="dateOfBirth"/>
                    <ImageField field="picture" displayName="Picture"
                    imageURL={props.model.pictureURL}/>
                    <MarkdownField field="biography" displayName="Biography" />

                    <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                    <a className="btn btn-secondary" href="/actors">Cancel</a>

                </Form>
            )}


        </Formik>

    )

}

export interface ActorFormProps {
    model: IActorCreationDTO;
    onSubmit(values: IActorCreationDTO, action: FormikHelpers<IActorCreationDTO>): void;
}