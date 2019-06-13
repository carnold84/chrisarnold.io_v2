const _uniqBy = require('lodash/uniqBy');
const _uniqueId = require('lodash/uniqueId');
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const NoteTemplate = path.resolve(`src/templates/NoteTemplate.js`);

  const {
    data: { allMarkdownRemark },
  } = await graphql(`
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
  `);

  // create notes pages
  allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: NoteTemplate,
      context: {}, // additional data can be passed via context
    });
  });

  const ResourcesTemplate = path.resolve(`src/templates/ResourcesTemplate.js`);

  const {
    data: { allResourcesJson },
  } = await graphql(`
    {
      allResourcesJson {
        edges {
          node {
            link
            tags
            title
          }
        }
      }
    }
  `);

  let allNodes = [];
  let allTags = [];
  let tagLookup = {};

  // create array of all tags
  allResourcesJson.edges.forEach(({ node }) => {
    let newNode = {
      ...node,
      id: _uniqueId(),
      tags: node.tags.map(tag => {
        const tagName = tag.toLowerCase();
        let newTag = tagLookup[tagName];
        if (newTag === undefined) {
          newTag = {
            id: tagName,
            label: tagName,
            path: `/resources/${tagName}`,
            count: 0,
          };
          tagLookup[tagName] = newTag;
        }
        newTag.count += 1;
        return newTag;
      }),
      tagStrings: node.tags, // keep strings just for filtering
    };
    allNodes.push(newNode);
    allTags = Object.values(tagLookup);
  });

  // create root resources page
  createPage({
    path: `/resources`,
    component: ResourcesTemplate,
    context: { nodes: allNodes, tags: allTags }, // additional data can be passed via context
  });

  // create pages for each tag
  allTags.forEach(tag => {
    const nodes = allNodes.filter(node => {
      return node.tagStrings.includes(tag.id);
    });

    createPage({
      path: tag.path,
      component: ResourcesTemplate,
      context: { currentTag: tag, nodes, tags: allTags }, // additional data can be passed via context
    });
  });
};
