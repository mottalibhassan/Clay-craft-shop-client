import { Outlet } from "react-router-dom";
import NavBer from "../NavBer/NavBer";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="container mx-auto">
                <NavBer/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;