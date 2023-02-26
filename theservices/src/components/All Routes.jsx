import { Route,Routes } from "react-router-dom";
import Checkout from "./Routes/Checkout";
import Footer from "./Routes/Footer";
import Home from "./Routes/Home";
import { LastPage } from "./Routes/LastPage";
import Navbar from "./Routes/Navbar";
import Payment from "./Routes/Payment";
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
            <Route path="/Checkout" element={<Checkout/>}/>
            <Route path="/Payment" element={<Payment/>}/>
            <Route path="/LastPage" element={<LastPage/>}/>
        </Routes>
        </>
    )
}