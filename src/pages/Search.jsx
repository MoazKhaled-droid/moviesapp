import { useLoaderData } from "react-router-dom";
import { getSearchResults } from "../services/api";

export default function Search() {
  const { results, page, total_pages: totalPages, query } = useLoaderData();
  console.log( query,  results, page,totalPages);
  
  return (
    <div>Search</div>
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