import { useLoaderData } from "react-router-dom";
import { getNowPlayingMovies } from "../services/api";

export default function Movies() {
  const movies = useLoaderData()
  console.log(movies.results)
  return <div>Movies</div>;
}

export async function loader() {
  const movies = await getNowPlayingMovies();
  return movies;
}
