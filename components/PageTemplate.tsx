import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PageTemplate = ({ children }) => (
  <>
    <div className="main-wrapper">
      <Header />

      {children}

      <Footer />

      <a href="#top" className="scroll-to-top">
        <i className="fas fa-angle-up" aria-hidden="true" />
      </a>
    </div>
  </>
);

export default PageTemplate;
