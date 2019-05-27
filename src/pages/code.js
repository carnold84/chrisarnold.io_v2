import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import AppHeader from '../components/AppHeader';
import CodeItem from '../components/CodeItem';
import Layout from '../components/Layout';

import breakpoint from '../utils/breakpoint';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 140px 40px;

  @media ${breakpoint('md')} {
    padding: 180px 100px;
  }

  @media ${breakpoint('lg')} {
    padding: 220px;
  }
`;

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
    <Layout theme={2}>
      <AppHeader
        hasClose={true}
        subTitle={'Experiments and Projects'}
        title={'Code'}
      />
      <Content>
        {edges.map(edge => {
          const nodeData = {
            description: edge.node.html,
            ...edge.node.frontmatter,
          };
          return <CodeItem data={nodeData} key={nodeData.path} />;
        })}
      </Content>
    </Layout>
  );
};
