import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";


const MainLayout = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <div>
             <Footer></Footer>
            </div>
         
        </div>
    );
};

export default MainLayout;