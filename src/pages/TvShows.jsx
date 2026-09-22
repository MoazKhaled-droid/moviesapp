import { useLoaderData } from "react-router-dom";
import { getNowPlayingTvShows } from "../services/api";
import MainPageContainer from "../ui/MainPageContainer";
import HeroSection from "../features/media/HeroSection";
import List from "../features/media/List";
import Pagination from "../features/media/Pagination";

export default function TvShows() {
  const { results, total_pages: totalPages } = useLoaderData();

  return (
    <MainPageContainer>
      <HeroSection item={results[0]} type="tv" />
      <List
        count={results.length}
        list={results}
        title="Now Plaing"
        type="tv"
      />
      <Pagination totalPages={totalPages} />
    </MainPageContainer>
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;
  const tvShows = await getNowPlayingTvShows(page);
  return tvShows;
}
