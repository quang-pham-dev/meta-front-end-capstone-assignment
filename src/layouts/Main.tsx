import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const MainLayout = () => {
  const [contentHeight, setContentHeight] = useState("auto");

  useEffect(() => {
    const updateContentHeight = () => {
      const windowHeight = window.innerHeight;
      const navHeight = document.querySelector("nav")?.offsetHeight || 0;
      const footerHeight = document.querySelector("footer")?.offsetHeight || 0;
      const newContentHeight = windowHeight - navHeight - footerHeight;
      setContentHeight(`${newContentHeight}px`);
    };

    updateContentHeight();
    window.addEventListener("resize", updateContentHeight);

    return () => window.removeEventListener("resize", updateContentHeight);
  }, []);

  return (
    <>
      <Nav />
      <main style={{ minHeight: contentHeight }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
