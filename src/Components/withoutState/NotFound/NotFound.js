import React from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

export default function NotFound() {
  return (
    <section id="not-found-section" className="content flex-column-center">
      <ScrollToTopOnMount />
      <h2>Page Not Found</h2>
      <p>We're sorry, this page does not exist. Please go to the main page:</p>
      <NavLink to={'/'}>https://friendlyfinancial.netlify.com</NavLink>
    </section>
  );
}
