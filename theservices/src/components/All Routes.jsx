import { Route,Routes } from "react-router-dom";
import Footer from "./Routes/Footer";
import Home from "./Routes/Home";
import Navbar from "./Routes/Navbar";


export default function AllRoutes(){


    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Navbar" element={<Navbar/>}/>
            <Route path="/Footer" element={<Footer/>}/>
        </Routes>
        </>
    )
}