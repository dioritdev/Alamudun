import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderTop from "../components/HeaderTop";

export default function Layout() {
    return (
        <div>
            <HeaderTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
