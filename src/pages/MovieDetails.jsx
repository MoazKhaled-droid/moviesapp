import { useLoaderData } from "react-router-dom";
import { getMovieDetails } from "../services/tmdbApi";
import DetailsPage from "../features/details/DetailsPage";

export default function MovieDetails() {
  const movieDetails = useLoaderData();
  const {
    recommendations: { results: recommendationsList },
  } = movieDetails;
  return (
    <DetailsPage
    key={movieDetails.id}
      item={movieDetails}
      recommendationsList={recommendationsList}
      type="movie"
    />
  );
}

export async function loader({ params }) {
  const { movieId } = params;
  const movieDetails = getMovieDetails(movieId);
  return movieDetails;
}
