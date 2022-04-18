// style
import './App.css';

// pages
import MainPage from "./pages/MainPage";
import CareerAdvocacyPage from "./pages/CareerAdvocacy";
import AcademicForumPage from "./pages/AcademicForum";
import CulturalSportsActivities from "./pages/CuturalSportsActivities";
import StudentServicesPage from "./pages/StudentServices";
import CSSAPage from "./pages/CSSA";
import AboutUsPage from "./pages/AboutUs";
import MainNavigation from './components/layout/MainNavigation';
import Footer from './components/Footer';

// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainNavigation />}>
            <Route index element={<MainPage />}></Route>
            <Route path="career" element={<CareerAdvocacyPage />}></Route>
            <Route path="academic" element={<AcademicForumPage />}></Route>
            <Route path="culture_and_sports" element={<CulturalSportsActivities />}></Route>
            <Route path="student" element={<StudentServicesPage />}></Route>
            <Route path="cssa" element={<CSSAPage />}></Route>
            <Route path="about_us" element={<AboutUsPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
