import React from 'react';
import { Link } from 'gatsby';
import Icon from './Icon';

function Navigation() {
  const mobileNavToggle = () => {
    if (typeof window !== 'undefined') {
      const toggle = document.getElementById('navbar-toggle');
      const menu = document.getElementById('navbarBasicExample');
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      toggle.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    }
  };
  return (
    <nav
      className="navbar is-dark py-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          to="/"
          className="navbar-item is-size-4-touch is-size-4 has-text-weight-bold"
        >
          Chris LaRocque
        </Link>
        <button
          id="navbar-toggle"
          type="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          tabIndex={0}
          data-target="navbarBasicExample"
          onClick={mobileNavToggle}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/projects" className="navbar-link"> Projects </Link>
            <div className="navbar-dropdown">
              <Link to="/projects/gatsby-v3-migration" className="navbar-item">
                Gatsby v3 Migration
              </Link>
              <Link to="/projects/larocque-dev" className="navbar-item">
                LaRocque.dev
              </Link>
              <Link to="/projects/greenhouse-jobs-board" className="navbar-item">
                Greenhouse jobs board
              </Link>
              <Link
                to="/projects/lambda-sitemap-generator"
                className="navbar-item"
              >
                Lambda sitemap generator
              </Link>
              <Link to="/projects/wifeapedia" className="navbar-item">
                Wifeapedia
              </Link>
              <Link to="/projects/brightcove" className="navbar-item">
                Brightcove
              </Link>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/tech" className="navbar-link"> Tech </Link>
            <div className="navbar-dropdown">
              <Link to="/tech/react" className="navbar-item"> React </Link>
              <Link to="/projects/vue" className="navbar-item"> Vue </Link>
            </div>
          </div>
          <Link to="/me" className="navbar-item"> About + Contact </Link>
          {/* <Link to="/search" className="navbar-item">
            <Icon name="Search" />
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
