import GenreForm from "./GenreForm";

export default function CreateGenres() {


    return (
        <>
            <h3>Create Genres Test</h3>

            <GenreForm model={{ name: '', id: 0 }}

                onSubmit={async value => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    console.log(value);
                }}
            />
        </>
    )
}