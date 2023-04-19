import DetailPage from "../pages/detail/index.js";
import HomePage from "../pages/home/index.js";

const ROUTES = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail",
    element: <DetailPage />,
  },
];

export default ROUTES;
