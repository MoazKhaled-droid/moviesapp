import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Movies, { loader as moviesLoader } from "./pages/Movies.jsx";
import MovieDetails,{loader as movieDetailsLoader} from "./pages/MovieDetails.jsx";
import TvShows from "./pages/TvShows.jsx";
import TvShowDetails from "./pages/TvShowDetails.jsx";
import Search from "./pages/Search.jsx";
import WishList from "./pages/WishList.jsx";
import AiAssistant from "./pages/AiAssistant.jsx";
import Error from "./ui/Error.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        loader:movieDetailsLoader,
        errorElement:<Error/>
      },
      {
        path: "tv",
        element: <TvShows />,
      },
      {
        path: "tv/:tvId",
        element: <TvShowDetails />,
      },
      {
        path: "search",
        element: <Search />,
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
