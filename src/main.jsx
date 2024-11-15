import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MiniProjects from './components/MiniProjects.jsx';
import Task1 from './routes/Task1.jsx';
import Task2 from './routes/Task2.jsx';
import RootLayout from './routes/RootLayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <MiniProjects />,
       },
       {path: '/task1', element: <Task1/>},
       {path: '/task2', element: <Task2/>}

    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
