import MainPageContainer from "../ui/MainPageContainer";
import Header from "../features/wishList/Header";
import WishListGrid from "../features/wishList/wishListGrid";
export default function WishList() {
  return (
    <MainPageContainer>
      <Header />
      <WishListGrid />
    </MainPageContainer>
  );
}
