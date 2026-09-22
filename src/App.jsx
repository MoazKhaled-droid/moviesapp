import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Movies, { loader as moviesLoader } from "./pages/Movies.jsx";
import MovieDetails, {
  loader as movieDetailsLoader,
} from "./pages/MovieDetails.jsx";
import TvShows, { loader as tvShowsLoader } from "./pages/TvShows.jsx";
import TvShowDetails, {
  loader as tvShowDetailsLoader,
} from "./pages/TvShowDetails.jsx";
import Search, { loader as searchLoader } from "./pages/Search.jsx";
import WishList from "./pages/WishList.jsx";
import AiAssistant from "./pages/AiAssistant.jsx";
import Error from "./ui/Error.jsx";
import { WishListProvider } from "./contexts/wishListContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <WishListProvider>
        <AppLayout />
      </WishListProvider>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="movies" replace />,
      },
      {
        path: "movies",
        element: <Movies />,
        loader: moviesLoader,
        errorElement: <Error />,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetails />,
        loader: movieDetailsLoader,
        errorElement: <Error />,
      },
      {
        path: "tv",
        element: <TvShows />,
        loader: tvShowsLoader,
        errorElement: <Error />,
      },
      {
        path: "tv/:tvId",
        element: <TvShowDetails />,
        loader: tvShowDetailsLoader,
        errorElement: <Error />,
      },
      {
        path: "search",
        element: <Search />,
        loader: searchLoader,
        errorElement: <Error />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "ai",
        element: <AiAssistant />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
