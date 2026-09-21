import { useLoaderData } from "react-router-dom";
import { getNowPlayingMovies } from "../services/api";

export default function Movies() {
  const { results, page, total_pages: totalPages } = useLoaderData();
  console.log(results, page, totalPages);
  return <div>Movies</div>;
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;
  const movies = await getNowPlayingMovies(page);
  return movies;
}
