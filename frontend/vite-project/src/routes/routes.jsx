import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
<<<<<<< Updated upstream
import HomePage from '../pages/Homepage/HomePage';
import Ranking from '../pages/Ranking';
=======

>>>>>>> Stashed changes
import Header from '../components/Header';
import HomePage from '../pages/HomePage/HomePage';
import Ranking from '../pages/Ranking';
import Toptier from '../pages/Toptier';
import Compare from '../pages/Compare';
import Footer from '../components/Footer';
<<<<<<< HEAD
=======
import Information from '../pages/Information';
import Toptier from '../pages/Toptier';
import Compare from '../pages/Compare';

<<<<<<< Updated upstream
>>>>>>> maivthanh
=======

>>>>>>> Stashed changes
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