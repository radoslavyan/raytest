import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import { landingPageDTO } from "./movies.model";

export default function HomePage() {

    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
      const timerId = setTimeout(() => {
        setMovies({
          inTheaters: [
            {
              id: 1,
              title: "Prince of Persia The Sands of Time",
              poster: "https://upload.wikimedia.org/wikipedia/en/d/df/Prince_of_Persia_poster.jpg"
            },
            {
              id: 2,
              title: " The Mandalorian",
              poster: "https://upload.wikimedia.org/wikipedia/en/e/e7/The_Mandalorian_season_2_poster.jpg"
            }
          ],
          upcomingReleases: [
            {
              id: 3,
              title: "Aquaman and the Lost Kingdom ",
              poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Aquaman_and_the_Lost_Kingdom_poster.jpg"
            },
            {
              id: 4,
              title: " The Marvels",
              poster: "https://upload.wikimedia.org/wikipedia/en/7/7a/The_Marvels_poster.jpg"
            }
          ]
        });
  
      }, 2000);
  
      return () => clearTimeout(timerId);
  
    });
    
    return (
        <>
            <h3>In Theathers</h3>
            <MoviesList movies={movies.inTheaters} />

            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomingReleases} />
        </>
    )
}