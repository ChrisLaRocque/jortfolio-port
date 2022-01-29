import * as React from 'react';

import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Cards from 'components/Cards';

function AllProjectsPage(props) {
  const { data } = props;
  const { allContentfulChrisProjectPage } = data;

  const projectCards = allContentfulChrisProjectPage.edges.map((edge) => edge.node);

  return (
    <Layout seoInfo={{ title: 'Projects | Chris LaRocque', description: "An overview of web development projects I've done in the past, including codebase migrations, endless landing pages for marketing campaigns, technical SEO audits and improvements, and many many more." }}>
      <Hero
        headline="Projects"
        colorIs="info"
      />
      <Cards
        cards={projectCards}
        prepend="/projects/"
        ctaText="More about"
      />
    </Layout>
  );
}
export const query = graphql`
  query AllProjectsPageQuery{
    allContentfulChrisProjectPage{
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
export default AllProjectsPage;
