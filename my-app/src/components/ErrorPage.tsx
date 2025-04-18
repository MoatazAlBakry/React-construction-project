import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage: React.FC = () => {
  return (
    <section className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>You are not supposed to be here! This is a sample error page in case the user gets lost.</p>
        <p>Now please go back to the home page</p>
        <Link to="/React-construction-project" className="home-link">
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage; 