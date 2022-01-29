/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import '../styles/main.scss';
import SEO from './SEO';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout(props) {
  const { children, seoInfo } = props;

  return (
    <>
      <SEO {...seoInfo} />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
