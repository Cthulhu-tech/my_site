import { Navigation } from "./navigation/navigation";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";

export const Layouts = () => {

    return <>
    <Navigation/>
    <Outlet/>
    <Footer/>
    </>

}