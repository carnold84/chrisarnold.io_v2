import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import NoteItem from '../components/NoteItem';
import Layout from '../components/Layout';

const NotesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "note" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              path
              date
              type
            }
          }
        }
      }
    }
  `);

  const {
    allMarkdownRemark: { edges },
  } = data;

  return (
    <Layout
      appHeaderColor={'--text-color-alt1'}
      bgColor={'--color-alt1'}
      isCompact={true}
    >
      {edges.map(edge => {
        const nodeData = {
          excerpt: edge.node.excerpt,
          ...edge.node.frontmatter,
        };
        return <NoteItem data={nodeData} key={nodeData.path} />;
      })}
    </Layout>
  );
};

export default NotesPage;
