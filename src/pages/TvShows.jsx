import { useLoaderData } from "react-router-dom";
import { getNowPlayingTvShows } from "../services/api";

export default function TvShows() {
  const { results, page, total_pages: totalPages } = useLoaderData();
  console.log(results, page, totalPages);
  
  return (
    <div>TvShows</div>
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;
  const tvShows = await getNowPlayingTvShows(page);
  return tvShows;
}