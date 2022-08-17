import { Navigation } from "./navigation/navigation";
import { Contacts } from "./contacts/contacts";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";

export const Layouts = () => {

    return <>
    <Navigation/>
    <div className="background_image"/>
    <Contacts/>
        <main className="main">
            <Outlet/>
        </main>
    <Footer/>
    </>

}