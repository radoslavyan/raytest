import axios from "axios";
import { useEffect } from "react";
import { AxiosResponse } from "axios";
import { genreDTO } from "../Genres/genres.model";
import { urlGenres } from "../utils/endpoints";

export default function IndexGenres() {

    useEffect(() => {
       axios.get(urlGenres)
       .then((response : AxiosResponse<genreDTO[]>) => {
              console.log(response.data);
         })
        
    }, []);


    return (
        <>
            <h3>Genres Test
            <a className="btn btn-primary btn-sm" href="/genres/create">Create genre</a>

            </h3>
        </>
    )
}