import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/Homepage/HomePage";
import Ranking from "../pages/Ranking";
import Toptier from "../pages/Toptier";
import Compare from "../pages/Compare";
import Footer from "../components/Footer";
import Information from "../pages/Information";
import Event from "../pages/Event";
import Watching from "../pages/Watching";
import About from "../pages/About";

const routes = createBrowserRouter([
  //public routes
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "ranking",
        element: <Ranking />,
      },
      {
        path: "info/:fighterName",
        element: <Information />,
      },
      {
        path: "toptier",
        element: <Toptier />,
      },
      {
        path: "compare",
        element: <Compare />,
      },
      {
        path: "compare/:fighter1/:fighter2",
        element: <Compare />,
      },
      {
        path: "event",
        element: <Event />,
      },
      {
        path: "watch",
        element: <Watching />,
      },
      {
        path: "watching",
        element: <Watching />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default routes;
