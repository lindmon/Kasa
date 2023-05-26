import React from "react";
import Home from './pages/home/Home';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Error from "./pages/error/Error";
import Accommodation from "./pages/accommodation/Accommodation";
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
//Créer le router pour les pages
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Header/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/accommodation/:id" element={<Accommodation/>} errorElement={<Error/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    )
  );
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
