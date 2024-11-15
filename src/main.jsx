import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MiniProjects from './components/MiniProjects.jsx';
import Project1 from './routes/Project1.jsx';
import Project2 from './routes/Project2.jsx';
import RootLayout from './routes/RootLayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <MiniProjects />,
       },
       {path: '/project1', element: <Project1/>}

    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
