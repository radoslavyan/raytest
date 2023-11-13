import ActorForm from "./ActorForm";

export default function CreateActors() {
    return (
        <>
            <h3>Create Actor</h3>

            <ActorForm model={{ name: "", dateOfBirth: undefined }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    console.log(actions);
                }} />
        </>
    )
}