import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./scss/global.scss";
import { routeConstants } from "./constants/routeConstant";
import ScrollUp from "./common/scrollUp/ScrollUp";
import Contact from "./pages/contact/Contact";
import Header from "./pages/header/Header";
import Portfolio from "./pages/portfolio/Portfolio";
import Service from "./pages/service/Service";
import AboutMe from "./pages/aboutMe/AboutMe";

function App() {
  return (
    <Router>
      <ScrollUp />
      <Header />
      <Routes>
        <Route path={routeConstants.HOME} element={<Home />} />
        <Route path={routeConstants.ABOUT_ME} element={<AboutMe />} />
        <Route path={routeConstants.SERVICE_LIST} element={<Service />} />
        <Route path={routeConstants.PORTFOLIO_LIST} element={<Portfolio />} />
        <Route path={routeConstants.CONTACT_US} element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
