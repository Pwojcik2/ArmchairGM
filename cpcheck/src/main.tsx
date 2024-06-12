import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home/App.tsx'
import Rangers from './pages/teams/rangers/Rangers.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Flyers from './pages/teams/flyers/Flyers.tsx'
import GoldenKnight from './pages/teams/goldenknights/GoldenKnight.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "teams/rangers",
    element: <Rangers/>
  },
  {
    path: "teams/flyers",
    element: <Flyers/>
  },
  {
    path: "teams/goldenknights",
    element: <GoldenKnight/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
