import Navbar from "../landingComponents/Navbar";
import Hero from "../landingComponents/Hero";
import MatrixBar from "../landingComponents/MatrixBar";
import Features from "../landingComponents/features";
import DashboardPreview from "../landingComponents/DashboardPreview";
import HowItWorks from "../landingComponents/HowItWorks";
import Departments from "../landingComponents/Departments";
import Analytics from "../landingComponents/Analytics";
import CTA from "../landingComponents/CTA";
import Footer from "../landingComponents/Footer";
import { useEffect } from "react";
import {useContext} from "react";
import {UserContext} from "../context/userContext";
import {useNavigate} from "react-router-dom";
function Landing() {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUserData(JSON.parse(userData));
      navigate("/app/dashboard");
    }
  }, []);
  return (
    <>
      <div className="w-full h-screen bg-[#F7F8FC]">
        <Navbar />
        <div className="max-w-6xl p-2 mx-auto">
            <Hero />
            <MatrixBar />
            <Features />
            <DashboardPreview />
            <HowItWorks />
            <Departments />
            <Analytics />
           
        </div>
         <CTA />
         <Footer />
      </div>
    </>
  );
}
export default Landing;
