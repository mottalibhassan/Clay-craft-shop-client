import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AuthProvider from './Components/Provider/AuthProvider/AuthProvider';
import Private from './Private/Private';
import AddProduct from './Components/AddProduct/AddProduct';
import MyAddProducts from './Components/MyAddProducts/MyAddProducts';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/addProduct',
        element: <Private><AddProduct/></Private>,
      },
      {
        path: '/myAddProducts',
        element: <Private> <MyAddProducts></MyAddProducts></Private>
      },
      {
        path: '/logIn',
        element: <LogIn/>,
      },
      {
        path: '/register',
        element: <Register/>,
      },
    ],
    errorElement:<ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
