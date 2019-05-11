const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const NoteTemplate = path.resolve(`src/templates/NoteTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "note" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: NoteTemplate,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
