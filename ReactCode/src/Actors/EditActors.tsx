import ActorForm from "./ActorForm";

export default function EditActors() {
    return (
        <>
            <h3>Edit Actor</h3>

            <ActorForm model={{ name: "Brat Pit", 
            dateOfBirth: new Date("1963-12-18T00:00:00"),
            biography: "William Bradley Pitt (born December 18, 1963) is an American actor and film producer. He has received multiple awards, including two Golden Globe Awards and an Academy Award for his acting, in addition to another Academy Award and a Primetime Emmy Award as producer under his production company, Plan B Entertainment.",
            pictureURL: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Brad_Pitt_2019_by_Glenn_Francis.jpg"
        }}
                onSubmit={(values, actions) => {
                    
                }} />

        </>
    )
}