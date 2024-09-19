import Navbar from "../NavBar";
import Footer from "../Footer";
import MobileNav from "../MobileNav";
import React from "react";

function WebsiteLayout({ children }) {
  return (
    <div>
      <MobileNav />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default WebsiteLayout;
