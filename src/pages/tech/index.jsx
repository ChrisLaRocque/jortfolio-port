import * as React from 'react';

import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Cards from 'components/Cards';

function AllTechPage(props) {
  const { data } = props;
  const { allContentfulTech } = data;

  const techCards = allContentfulTech.edges.map((edge) => edge.node);

  return (
    <Layout seoInfo={{title: 'Tech | Chris LaRocque', description: "An overview of the tools I've used as a full stack web developer. Including but not limited to: Gatsby, Nuxt, React, GraphQL, Contentful, Netlify, Gatsby Cloud, and AWS."}}>
      <Hero
        headline="Tech"
        colorIs="link"
      />
      <Cards
        cards={techCards}
        prepend="/tech/"
        ctaText="What I've made with"
        icons
      />
    </Layout>
  );
}
export const query = graphql`
  query AllTechPageQuery{
    allContentfulTech{
      edges {
        node {
          slug
          title
          description
        }
      }
    }
  }
`;
export default AllTechPage;
