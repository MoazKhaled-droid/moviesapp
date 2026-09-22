import { useLoaderData } from "react-router-dom";
import { getSearchResults } from "../services/tmdbApi";
import MainPageContainer from "../ui/MainPageContainer";
import SearchHeader from "../features/search/searchHeader";
import NoResults from "../features/search/NoResults";
import List from "../features/media/List";
import Pagination from "../features/media/Pagination";

export default function Search() {
  const { results, total_pages: totalPages } = useLoaderData();
  const filterdResults = results.filter(
    ({ media_type: type }) => type !== "person",
  );

  return (
    <MainPageContainer>
      <SearchHeader  totalResults={filterdResults.length}/>
      {filterdResults.length <= 0 ? (
        <NoResults />
      ) : (
        <List
          count={results.length}
          list={filterdResults}
          title="Your Search Results"
        />
      )}
      <Pagination totalPages={totalPages} />
    </MainPageContainer>
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);

  const query = url.searchParams.get("q");
  const page = url.searchParams.get("page") || 1;

  if (!query) {
    return { results: [], page: 1, total_pages: 1, query: "" };
  }

  const searchResults = await getSearchResults(query, page);

  return { ...searchResults, query };
}
