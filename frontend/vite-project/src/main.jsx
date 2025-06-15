import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom'; // Import BrowserRouter
import routes from './routes/routes';
import './App.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={routes} />
    </StrictMode>
);