import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import Header from '../components/Header';
import Footer from '../components/Footer';
const routes = createBrowserRouter([
    //public routes
    {
        path:"/",
        element: <><Header/><Outlet/><Footer/></>,
        children: [
            {
                index:true,
                element: <HomePage/>
            }
        ]
    }
]);

export default routes