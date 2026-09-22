import { useLoaderData } from "react-router-dom";
import { getTvShowDetails } from "../services/tmdbApi";
import DetailsPage from "../features/details/DetailsPage";

export default function TvShowDetails() {
  const tvShowDetails = useLoaderData();
  console.log(tvShowDetails);

  const {
    recommendations: { results: recommendationsList },
  } = tvShowDetails;
  return (
    <DetailsPage
      key={tvShowDetails.id}
      item={tvShowDetails}
      recommendationsList={recommendationsList}
      type="tv"
    />
  );
}

export async function loader({ params }) {
  const { tvId } = params;
  const tvShowDetails = await getTvShowDetails(tvId);
  return tvShowDetails;
}
