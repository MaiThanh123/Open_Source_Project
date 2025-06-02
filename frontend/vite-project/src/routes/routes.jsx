import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import Ranking from '../pages/Ranking';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Information from '../pages/Information';

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
        ]
    }
]);

export default routes