import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import HobbiesPage from "./Pages/hobbies/HobbiesPage";

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
