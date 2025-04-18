import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import MissionStatement from '../components/MissionStatement';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import ErrorPage from '../components/ErrorPage';
import MoreInfo from '../components/MoreInfo';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <MissionStatement />
      <Projects />
      <ContactForm />
    </div>
  );
};

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/React-construction-project/" element={<Home />} />
      <Route path="/React-construction-project/about" element={<About />} />
      <Route path="/React-construction-project/projects" element={<Projects />} />
      <Route path="/React-construction-project/projects/:id" element={<MoreInfo />} />
      <Route path="/React-construction-project/gallery" element={<Gallery />} />
      <Route path="/React-construction-project/contact" element={<ContactForm />} />
      <Route path="/React-construction-project" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}; 