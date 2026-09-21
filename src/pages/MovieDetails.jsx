import { useLoaderData } from "react-router-dom";
import { getMovieDetails } from "../services/api";

export default function MovieDetails() {
  const movieDetails = useLoaderData()
  console.log(movieDetails) 
  return (
    <div>MovieDetails</div>
  )
}

export async function loader({params}) {
  const {movieId} = params;
  const movieDetails = getMovieDetails(movieId)
  return movieDetails
}