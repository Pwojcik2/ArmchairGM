import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/home/App.tsx";
import Rangers from "./pages/teams/Rangers.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Flyers from "./pages/teams/Flyers.tsx";
// import GoldenKnight from "./pages/teams/GoldenKnight.tsx";
// import Lightning from "./pages/teams/Lightning.tsx";
// import Wild from "./pages/teams/wild.tsx";
// import Islanders from "./pages/teams/Islanders.tsx";
// import Capitals from "./pages/teams/Capitals.tsx";
// import Canadiens from "./pages/teams/Canadiens.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "teams/goldenknights",
  //   element: <GoldenKnight />,
  // },
  // {
  //   path: "teams/lightning",
  //   element: <Lightning />,
  // },
  // {
  //   path: "teams/wild",
  //   element: <Wild />,
  // },
  // {
  //   path: "teams/islanders",
  //   element: <Islanders />,
  // },
  // {
  //   path: "teams/capitals",
  //   element: <Capitals />,
  // },
  // {
  //   path: "teams/canadiens",
  //   element: <Canadiens />,
  // },
  {
    path: "teams/rangers",
    element: <Rangers />,
  },
  // {
  //   path: "teams/flyers",
  //   element: <Flyers />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
