import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import { DashboardLoader } from './loaders/Dashboard.loader';
import { ProfileLoader } from './loaders/Profile.loader';
import ForgotPassword from './pages/Forgotpassword';
import ResetPassword from './pages/ResetPassword';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  }, {
    path: "/login",
    element: <Login />,
  }, {
    path: "/register",
    element: <Register />,
  }, {
    path: "/dashboard",
    element: <Dashboard />,
    loader: DashboardLoader,
  }, {
    path: "/profile",
    element: <Profile />,
    loader: ProfileLoader,
  },{
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },{
    path: "/resetpassword/:id",
    element: <ResetPassword />,
  }

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
