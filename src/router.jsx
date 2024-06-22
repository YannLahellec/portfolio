import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HobbiesPage from "./Pages/HoobiesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/hobbies",
        element: <HobbiesPage />,
      },
    ],
  },
]);

export default router;
