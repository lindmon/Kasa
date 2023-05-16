import React from "react";
import Home from './pages/home/Home'
import About from './pages/about/About';
import Error from "./pages/error/Error";
import Accommodation from "./pages/accommodation/Accommodation";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/accommodation/:id",
    element: <Accommodation />,
  },
  {
    path: "*",
    element: <Error />,
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
