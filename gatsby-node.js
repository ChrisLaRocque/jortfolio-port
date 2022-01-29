exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectsQuery = `{
    allContentfulChrisProjectPage {
      edges {
        node {
          slug
        }
      }
    }
  }`;
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
  await graphql(projectsQuery).then((result) => {
    if (result.errors) {
      console.error('projectsQuery error', result.errors);
    } else {
      result.data.allContentfulChrisProjectPage.edges.forEach(({ node }) => {
        createPage({
          path: `/projects/${node.slug}/`,
          component: require.resolve('./src/templates/Project.jsx'),
          context: {
            slug: node.slug,
          },
        });
      });
    }
  });
};
