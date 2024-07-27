import App from "../App";
import HomePage from "../Pages/HomePage";
import HobbiesPage from "../Pages/hobbies/HobbiesPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/hobbies",
        element: <HobbiesPage/>
      }
    ],
  },
]);

export default router;
