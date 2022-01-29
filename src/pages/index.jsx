import * as React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Cards from '../components/Cards';

function IndexPage(props) {
  const { data } = props;
  const { allContentfulChrisProjectPage, allContentfulTech } = data;

  const projectCards = allContentfulChrisProjectPage.edges.map((edge) => edge.node);
  const techCards = allContentfulTech.edges.map((edge) => edge.node);

  return (
    <Layout seoInfo={{ title: 'Chris LaRocque | Web Developer', description: 'Chris LaRocque is a web developer from Boston, MA. He specializes in tactical agile development aimed at delivering user-centric software at scale and at speed.' }}>
      <Hero
        headline="Hey I'm Chris, I do web stuff."
        subHeadline="I'm a full-stack web developer/engineer building responsive, user-first websites. Check out the things I've built or the tech I've used to build them below."
      />
      <Cards
        headline="Projects"
        subHeadline="The 3 most recent projects of mine."
        cards={projectCards}
        more={{ to: '/projects', text: 'All projects', is: 'info' }}
        prepend="/projects/"
        ctaText="Building"
      />
      <Cards
        headline="Tech"
        subHeadline="The tech I use and where I've used it"
        cards={techCards}
        more={{ to: '/tech', text: 'All tech', is: 'link' }}
        prepend="/tech/"
        icons
        ctaText="What I've built with"
      />
    </Layout>
  );
}
export const query = graphql`
  query HomepageQuery{
    allContentfulChrisProjectPage(
      limit: 3
    ){
      edges {
        node {
          slug
          title
          description
        }
      }
    }
    allContentfulTech(
      limit: 6
    ){
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
export default IndexPage;
