// Importing necessary libraries and components
import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { AppRoutes } from './routes';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
