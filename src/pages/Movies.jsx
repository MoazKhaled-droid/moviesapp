import { useLoaderData } from "react-router-dom";
import { getNowPlayingMovies } from "../services/api";
import HeroSection from "../features/media/HeroSection";
import List from "../features/media/List";
import Pagination from "../features/media/Pagination";
import MainPageContainer from "../ui/MainPageContainer";

export default function Movies() {
  const { results, total_pages: totalPages } = useLoaderData();
  return (
    <MainPageContainer>
      <HeroSection item={results[0]} type="movie" />
      <List
        count={results.length}
        list={results}
        title="Now Plaing"
        type="movie"
      />
      <Pagination totalPages={totalPages} />
    </MainPageContainer>
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;
  const movies = await getNowPlayingMovies(page);
  return movies;
}
