import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import HomePage from '../pages/Homepage/HomePage';
import Ranking from '../pages/Ranking';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Information from '../pages/Information';
import Toptier from '../pages/Toptier';
import Compare from '../pages/Compare';

const routes = createBrowserRouter([
    //public routes
    {
        path:"/",
        element: <><Header/><Outlet/><Footer/></>,
        children: [
            {
                index:true,
                element: <HomePage/>
            },
            {
                path: "ranking",
                element: <Ranking />
            },
            {
                path: "info",
                element: <Information />
            },
            {
                path: "toptier",
                element: <Toptier />
            },
            {
                path: "compare",
                element: <Compare />
            },
        ]
    }
]);

export default routes