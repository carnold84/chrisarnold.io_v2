import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import NoteItem from '../components/NoteItem';

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
    <>
      {edges.map(edge => {
        const nodeData = {
          excerpt: edge.node.excerpt,
          ...edge.node.frontmatter,
        };
        return <NoteItem data={nodeData} key={nodeData.path} />;
      })}
    </>
  );
};

export default NotesPage;
