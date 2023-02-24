import { Route,Routes } from "react-router-dom";
import Footer from "./Routes/Footer";
import Home from "./Routes/Home";
import Navbar from "./Routes/Navbar";
import Women from "./Routes/SalonforWomen";
import WomenTherapies from "./Routes/WomenTherapies";
import { SingleProductPage } from "./SingleProductPage";


export default function AllRoutes(){


    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Navbar" element={<Navbar/>}/>
            <Route path="/Footer" element={<Footer/>}/>
            <Route path="/SalonforWomen" element={<Women/>}/>
            <Route path="/SalonforWomen/:id" element={<SingleProductPage/>}/>
            <Route path="/WomenTherapies" element={<WomenTherapies/>}/>
            <Route path="/WomenTherapies/:id" element={<SingleProductPage/>}/>
        </Routes>
        </>
    )
}