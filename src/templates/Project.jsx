import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import Warning from '../components/Warning';

function Project(props) {
  const { data } = props;
  const { contentfulChrisProjectPage } = data;
  const {
    title, description, body, site, tech, githubLink, relatedProjects, inProgress,
  } = contentfulChrisProjectPage;

  // Click handler for inline image zoom
  //   if (typeof window !== 'undefined') {
  //     const pageWrapper = document.getElementById('page-wrapper');
  //     if (pageWrapper) {
  //       const pageImages = pageWrapper.querySelectorAll('img');
  //
  //       if (pageImages.length > 0) {
  //         const modal = pageWrapper.querySelector('.modal');
  //         const modalImage = modal.querySelector('.image').querySelector('img');
  //         const imageClickHandler = (image) => {
  //           console.log('clicked');
  //           modal.classList.toggle('is-active');
  //           modalImage.src = image.src;
  //         };
  //         // Each image gets an event listener
  //         pageImages.forEach((image) => image.addEventListener(
  //           'click',
  //           imageClickHandler(image),
  //         ));
  //         // Close button
  //         const closeButton = modal.querySelector('.modal-close');
  //         closeButton.addEventListener('click', (e) => {
  //           modal.classList.toggle('is-active');
  //         });
  //       }
  //     }
  //   }
  return (
    <Layout seoInfo={{ title, description }}>
      <section id="page-wrapper" className="columns is-desktop">
        <div className="column is-two-thirds is-desktop">
          <h1 className="is-size-3 is-size-4-touch is-capitalized has-text-weight-bold">
            {title}
          </h1>
          {body && (
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
            />
          )}
        </div>
        <div className="column">
          <strong style={{ display: 'block' }} className="has-text-grey-darker mt-4 mb-2">Related links</strong>
          {site && (
            <div className="box">
              <small style={{ display: 'block' }}>Site</small>
              <a href={site.link}>{site.text}</a>
            </div>
          )}
          {tech && (
            <div className="box">
              <small style={{ display: 'block' }}>Tech used</small>
              <div className="columns is-multiline is-mobile mt-2">
                {tech.map((techItem) => (
                  <Link
                    key={techItem.slug}
                    className="column is-one-fifth"
                    to={`/tech/${techItem.slug}`}
                  >
                    <Icon name={techItem.name} />
                  </Link>
                ))}
              </div>
            </div>
          )}
          {githubLink && (
            <div className="box">
              <small style={{ display: 'block' }}>Github for project</small>
              <a href={githubLink} style={{ display: 'block' }} className="mt-2">
                <Icon name="Github" />
              </a>
            </div>
          )}
          {relatedProjects && (
            <div className="box">
              <small style={{ display: 'block' }}>Related projects</small>
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  style={{ display: 'block' }}
                  to={`/projects/${relatedProject.slug}`}
                >
                  { relatedProject.title }
                </Link>
              ))}
            </div>
          )}
          {/* <div
            id="there-has-to-be-a-better-way"
            className="box"
            style={{ visibility: 'hidden' }}
          >
            <small style={{ display: 'block' }}>Table of contents</small>
            <div className="content">
              <nav id="nav-side" className="table-of-contents" />
            </div>
          </div> */}
        </div>
        {/* <div className="modal">
          <div className="modal-background" />
          <div className="modal-content">
            <p className="image">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
            </p>
          </div>
          <button className="modal-close is-large" type="button" aria-label="close" />
        </div> */}
        {inProgress && <Warning />}
      </section>
    </Layout>
  );
}
export const query = graphql`
    query projectQuery($slug: String!){
        contentfulChrisProjectPage(slug: {eq: $slug}){
            title
            description
            body {
                childMarkdownRemark {
                    html
                    timeToRead
                }
            }
            site {
                link
                text
            }
            tech {
                slug
                name
            }
            relatedProjects {
                slug
                title
            }
            githubLink
            inProgress
        }
    }
`;
export default Project;
