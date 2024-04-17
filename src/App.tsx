import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Banking from "./pages/banking";
import Contact from "./pages/contact-us";
import DIFC from "./pages/DIFC";
import FAQ from "./pages/faq";
import Support from "./pages/support";
import SetupBusiness from "./pages/setupBusiness";
import Promotions from "./pages/promotions";
import Meeting from "./pages/meeting";
import Marketing from "./pages/marketing";
import CostCalculator from "./pages/cost-calculator";
import About from "./pages/about";
import AboutComp from "./pages/about/aboutComp";
import Facilities from "./pages/about/facilities";
import Leadership from "./pages/about/leadership";
import Rakez from "./pages/about/rakez";
import RasAlKhaimah from "./pages/about/ras-al-khaimah";
import Zones from "./pages/about/zones";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="banking" element={<Banking />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="DIFC" element={<DIFC />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="support" element={<Support />} />
        <Route path="setup-business" element={<SetupBusiness />} />
        <Route path="promotions" element={<Promotions />} />
        <Route path="meeting" element={<Meeting />} />
        <Route path="marketing" element={<Marketing />} />
        <Route path="cost-calculator" element={<CostCalculator />} />
        <Route path="about" element={<About />}>
          <Route path="/" element={<AboutComp />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="rakez" element={<Rakez />} />
          <Route path="ras-al-khaimah" element={<RasAlKhaimah />} />
          <Route path="zones" element={<Zones />} />
        </Route> */}
      </Route>
    </Routes>
  );
};

export default App;
