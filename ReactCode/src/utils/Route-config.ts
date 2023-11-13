import CreateActors from "../Actors/CreateActors";
import EditActors from "../Actors/EditActors";
import IndexActors from "../Actors/IndexActors";
import CreateGenre from "../Genres/CreateGenre";
import EditGenre from "../Genres/EditGenre";
import IndexGenres from "../Genres/IndexGenres";
import CreateMovieTheatre from "../MovieTheatres/CreateMovieTheatre";
import EditMovieTheatre from "../MovieTheatres/EditMovieTheatre";
import IndexMovieTheatre from "../MovieTheatres/IndexMovieTheatre";
import CreateMovie from "../Movies/CreateMovie";
import EditMovie from "../Movies/EditMovie";
import FilterMovie from "../Movies/FilterMovie";
import HomePage from "../Movies/HomePage";
import RedirectToHomePage from "./RedirectToHomePage";

//centralized route config
const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage,
    },
    {
        path: "/genres",
        exact: true,
        component: IndexGenres,
    },
    {
        path: "/genres/create",
        exact: true,
        component: CreateGenre,
    },
    {
        path: "/genres/edit/:id(\\d+)",
        exact: true,
        component: EditGenre,
    },
    {
        path: "/actors",
        exact: true,
        component: IndexActors,
    },
    {
        path: "/actors/create",
        exact: true,
        component: CreateActors,
    },
    {
        path: "/actors/edit/:id(\\d+)",
        exact: true,
        component: EditActors,
    },

    {
        path: "/movietheaters",
        exact: true,
        component: IndexMovieTheatre,
    },
    {
        path: "/movietheaters/create",
        exact: true,
        component: CreateMovieTheatre,
    },
    {
        path: "/movietheaters/edit/:id(\\d+)",
        exact: true,
        component: EditMovieTheatre ,
    },

    {
        path: "/movies/create",
        exact: true,
        component: CreateMovie,
    },
    {
        path: "/movies/edit/:id(\\d+)",
        exact: true,
        component: EditMovie,
    },
    {
        path: "/movies/filter",
        exact: true,
        component: FilterMovie ,
    },
    {
        path: "*",  //catch all route if no route matches
        component: RedirectToHomePage ,
    },

];

export default routes;


