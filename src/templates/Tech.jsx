import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import Description from 'components/Description';

function Tech(props) {
  const { data } = props;
  const { contentfulTech, allContentfulChrisProjectPage } = data;
  const {
    title, description, name, homepage, experience,
  } = contentfulTech;
  const related = allContentfulChrisProjectPage.edges.map(({ node }) => node);
  return (
    <Layout seoInfo={{ title, description }}>
      <section>
        <div className="columns">
          <div className="column is-two-thirds">
            <h1
              className="is-size-3 is-size-4-touch is-capitalized has-text-weight-bold"
            >
              { name }
            </h1>
            <div className="content">
              <Description homepageFields={homepage} />
              { description }
            </div>
            {experience && (
            <div className="content">
              <h2>{ `My experience with ${name}` }</h2>
              <div dangerouslySetInnerHTML={{ __html: experience.childMarkdownRemark.html }} />
            </div>
            )}
          </div>
          <div className="column is-one-third">
            <strong style={{ display: 'block' }} className="has-text-grey-darker mt-4 mb-2">
              {
          `Related links for ${name}`
        }

            </strong>
            <div className="box">
              <small style={{ display: 'block' }}>
                {
            `${name} homepage`
          }

              </small>
              <a href={homepage.link}>
                <Icon name={name} />
&nbsp;
                {
              homepage.text
            }

              </a>
            </div>
            {related && (
            <div className="box">
              <small style={{ display: 'block' }}>
                {
            `Projects where I've used ${name}`
          }
              </small>
              {related.map((project) => {
                const { slug, title } = project;
                return (
                  <Link
                    key={slug}
                    style={{ display: 'block' }}
                    to={`/projects/${slug}`}
                  >
                    {title }
                  </Link>
                );
              })}

            </div>
            )}
          </div>
        </div>
        <div className="columns">
          <div className="column is-full">
            <Link to="/tech">
              <Icon name="Arrow left" />
              {' '}
              All tech
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export const query = graphql`
    query TechQuery($slug: String!){
        contentfulTech(slug: {eq: $slug}){
            title
            description
            name
            homepage {
              link
              text
            }
            experience {
              childMarkdownRemark {
                html
              }
            }
        }
          allContentfulChrisProjectPage(filter: {tech: {elemMatch: {slug: {eq: $slug}}}}) {
            edges {
              node {
                slug
                title
              }
            }
          }
    }
`;
export default Tech;
