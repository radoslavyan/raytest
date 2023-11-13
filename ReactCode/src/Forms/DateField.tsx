import { useFormikContext } from "formik"


export default function DateField(props: DateFieldProps) {
    const { values, validateForm, touched, errors } = useFormikContext<any>();

    return (
        <div className="ms-3">
            <label htmlFor={props.field}>{props.displayName}</label>

            <input type="date" className="form-control"
                id={props.field}
                name={props.field}
                value={values[props.field] ? values[props.field].toISOString().split('T')[0] : ""}
                defaultValue={values[props.field]?.toLocaleDateString('en-CA')}
                onChange={e => {
                    const date = new Date(e.currentTarget.value + "T00:00:00");
                    values[props.field] = date;
                    validateForm();
                }}
            />
            {touched[props.field] && errors[props.field] ?
             <div className="text-danger">{errors[props.field]?.toString()}</div> : null
            }

        </div>
    )
}

interface DateFieldProps {
    displayName: string;
    field: string;
}
    
