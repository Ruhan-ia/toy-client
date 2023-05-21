import React from 'react';
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddToy from '../Pages/AddToy/AddToy';
import Blog from '../Pages/Blog/Blog';
import MyToys from '../Pages/MyToys/MyToys';
import PrivateRoute from './PrivateRoute';
import AllToys from '../Pages/AllToys/AllToys';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/addtoy',
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/myToys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:'/alltoys',
          element:<PrivateRoute><AllToys></AllToys></PrivateRoute>
        }
      ]
    },
  ]);

export default router;