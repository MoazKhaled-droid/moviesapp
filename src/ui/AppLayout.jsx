import { Outlet, useNavigation } from "react-router-dom";
import Header from "./header/Header";
import Loader from "./Loader";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  useScrollToTop();
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
