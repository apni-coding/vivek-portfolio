import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./scss/global.scss";
import "./css/dark.css";
import { routeConstants } from "./constants/routeConstant";
import ScrollUp from "./common/scrollUp/ScrollUp";
import Contact from "./pages/contact/Contact";
import Header from "./pages/header/Header";
import Portfolio from "./pages/portfolio/Portfolio";
import Service from "./pages/service/Service";
import AboutMe from "./pages/aboutMe/AboutMe";
import Loader from "./common/loader/Loader";
import { useEffect, useState } from "react";
import ProjectDetails from "./pages/projectDetails/ProjectDetails";
import LightToggle from "./common/lightDarkModeToggle/LightToggle";
import Certificates from "./pages/certificates/Certificates";
import NotFound from "./pages/notFound/NotFound";
import NoInternet from "./pages/noInternet/NoInternet";
import Chatbot from "./pages/chatBot/ChatBot";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setLoading(true);
    setClosing(false);
    const timer = setTimeout(() => {
      setClosing(true);
      setTimeout(() => setLoading(false), 500); // Wait for closeDoor animation
    }, 500);

    return () => clearTimeout(timer);
    
  }, [location?.pathname]);

  return (
    <>
      <ScrollUp />
      <NoInternet />
      <Chatbot />
      {loading && <Loader closing={closing} />}
      {!location?.pathname?.includes(routeConstants.PORTFOLIO_DETAIL) && (
        <LightToggle />
      )}
      <Routes>
        <Route path={routeConstants.HOME} element={<Home />} />
        <Route path={routeConstants.ABOUT_ME} element={<AboutMe />} />
        <Route path={routeConstants.SERVICE_LIST} element={<Service />} />
        <Route path={routeConstants.PORTFOLIO_LIST} element={<Portfolio />} />
        <Route path={routeConstants.CONTACT_US} element={<Contact />} />
        <Route path={routeConstants.REWARD_CERTIFICATES} element={<Certificates />} />
        <Route
          path={`${routeConstants.PORTFOLIO_DETAIL}/:id`}
          element={<ProjectDetails />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
