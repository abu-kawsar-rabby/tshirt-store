import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './component/Shop/Shop';
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Blog from './component/Blog/Blog';
import Family from './component/Family/Family';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home></Home>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>,
          loader: () => fetch('tshirts.json')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/family',
          element: <Family></Family>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
      ]
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
    ></RouterProvider>
  </React.StrictMode>,
)
