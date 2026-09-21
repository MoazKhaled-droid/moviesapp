import { Outlet, useNavigation } from "react-router-dom";
import Header from "./header/Header";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
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
