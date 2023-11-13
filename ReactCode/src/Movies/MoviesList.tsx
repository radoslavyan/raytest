import IndividualMovies from "./IndividualMovies";
import { movieDTO } from "./movies.model";
import css from './MoviesList.module.css'
import Loading from "../utils/Loading";
import GenericList from "../utils/GenericList";

export default function MoviesList(props: moviesListProps) {

    //the movies are loaded

    return <GenericList list={props.movies}>
        <div className={css.div}>
            {props.movies?.map(movie =>
                <IndividualMovies {...movie} key={movie.id} />)}
        </div>
    </GenericList>

}


interface moviesListProps {
    movies?: movieDTO[];
}