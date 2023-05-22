import React from "react";
import Home from './pages/home/Home';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Error from "./pages/error/Error";
import Accommodation from "./pages/accommodation/Accommodation";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
//Créer le router pour les page
const router = createBrowserRouter( [
  { 
    element: <Header/>,
    children: [
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
            errorElement: <Error/>,
          },
          {
            path: "*",
            element: <Error />,
          }
    ],
  },     
]);
//Demarrer le router
function App() {
  return (
    <div>
    <RouterProvider router={router} />
    <Footer/>
    </div>
  );
}
export default App;
