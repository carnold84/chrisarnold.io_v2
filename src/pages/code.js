import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import CodeItem from '../components/CodeItem';
import Layout from '../components/Layout';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "code" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            html
            frontmatter {
              date
              demoLink
              path
              repositoryLink
              tags
              title
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
    <Layout appHeaderColor={'--text-color-alt1'} bgColor={'--color-alt1'}>
      {edges.map(edge => {
        const nodeData = {
          description: edge.node.html,
          ...edge.node.frontmatter,
        };
        return <CodeItem data={nodeData} key={nodeData.path} />;
      })}
    </Layout>
  );
};
