import {Outlet} from "react-router-dom";
import IssueBanner from "./components/IssueBanner";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AppContext from "./context/AppContext";
import {useEffect, useState} from "react";
export default function App() {
   useEffect(() => {
     // Create script element
     const script = document.createElement("script");
     script.src = "/gdev_form_validator.js"; // Adjust the path if necessary
     script.type = "module"; // Ensure it's treated as an ES module
     script.async = true; // Load asynchronously
     script.defer = true; // Wait until the DOM is fully loaded

     // Append script to the document
     document.body.appendChild(script);

     return () => {
       // Cleanup (optional): Remove script if component unmounts
       document.body.removeChild(script);
     };
   }, []);
  const [activeNav, setActiveNav] = useState("");
  return (
    <AppContext.Provider value={{setActiveNav}}>
      <IssueBanner />
      <section className="container">
        <Header />
        <div className="d-flex flex-row">
          <SideBar className={activeNav} />
          <Outlet />
          <Navigation />
        </div>
      </section>
    </AppContext.Provider>
  );
}
