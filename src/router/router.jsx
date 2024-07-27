import App from "../App";
import HomePage from "../Pages/HomePage";
import HobbiesPage from "../Pages/hobbies/HobbiesPage";
import Pages from '../Pages'
import { createBrowserRouter } from "react-router-dom";

console.log(Pages);

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
