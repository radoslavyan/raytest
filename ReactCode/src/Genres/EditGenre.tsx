import { useParams } from "react-router-dom";
import GenreForm from "./GenreForm";

export default function EditGenre() {
    const { id }: any = useParams<{ id: string }>();

    return (
        <>
            <h3>Edit Genre</h3>
            the id is {id}

            <GenreForm model={{ name: 'Action', id: parseInt(id) }}

                onSubmit={async value => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    console.log(id);
                    console.log(value);
                }}
            />
        </>
    )
}
