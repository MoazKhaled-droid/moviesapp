import MainPageContainer from "../../ui/MainPageContainer";
import List from "../media/List";
import DetailsContent from "./DetailsContent";
import DetailsHero from "./DetailsHero";

export default function DetailsPage({ item, recommendationsList, type }) {
  return (
    <MainPageContainer>
      <DetailsHero item={item} type={type} />
      <DetailsContent item={item} ء />
      <List
        key={item.id}
        count={recommendationsList.length}
        list={recommendationsList}
        title="Recommendations"
        type={type}
      />
    </MainPageContainer>
  );
}
