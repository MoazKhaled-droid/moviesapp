import { useLoaderData } from "react-router-dom";
import { getTvShowDetails } from "../services/api";

export default function TvShowDetails() {
  const tvShowDetails = useLoaderData();
  console.log(tvShowDetails);
  
  return (
    <div>TvShowDetails</div>
  );
}

export async function loader({ params }) {
  const { tvId } = params;
  const tvShowDetails = await getTvShowDetails(tvId);
  return tvShowDetails;
}