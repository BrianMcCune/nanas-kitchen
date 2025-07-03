import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
// import Footer from "../components/Footer";
import React from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <>
            <Navbar />
            <MobileNav />
            <main>{children}</main>
        </>
     );
}
 
export default Layout;